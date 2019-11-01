import Vue from "vue";
import Vuex from "vuex";
import _get from "lodash/get";
import _pick from "lodash/pick";
import { firebase } from "./helpers/firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    started: false,
    userLoged: null,
    mensajes: [],
    usuarios: []
  },
  mutations: {
    setState: (state, pay) => {
      state.hasOwnProperty(_get(pay, "key", "NA"))
        ? (state[_get(pay, "key", "NA")] = _get(pay, "value", null))
        : null;
    }
  },
  actions: {
    startProcess({ commit, state }) {
      if (state.started) return;
      commit("setState", { key: "started", value: true });
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          commit("setState", {
            key: "userLoged",
            value: _pick(user, ["displayName", "email", "emailVerified", "uid"])
          });
        } else {
          commit("setState", { key: "userLoged", value: null });
        }
      });
    },
    // eslint-disable-next-line no-unused-vars
    login({ commit }, payload) {
      return firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password);
    },
    logout() {
      return firebase.auth().signOut();
    },
    obtenerMensajesParaMi({ commit, state }) {
      if (!state.userLoged) return;
      return firebase
        .firestore()
        .collection("mensajes")
        .where("usuarios", "array-contains", `user_${state.userLoged.uid}`)
        .onSnapshot(function(querySnapshot) {
          const results = [];
          querySnapshot.forEach(function(doc) {
            results.push({ uid: doc.id, data: doc.data() });
          });
          commit("setState", { key: "mensajes", value: results });
        });
    },
    crearMensaje({ state }, payload) {
      if (!state.userLoged) return;
      return firebase
        .firestore()
        .collection("mensajes")
        .add(payload);
    },
    actualizarMensaje({ state }, payload) {
      if (!state.userLoged) return;
      return firebase
        .firestore()
        .collection("mensajes")
        .doc(payload.id)
        .update(payload.data);
    },
    obtenerPosiblesUsuarios({ commit, state }) {
      console.log("exec", state.userLoged)
      if (!state.userLoged) return;
      return firebase
        .firestore()
        .collection("usuario")
        .onSnapshot(function(querySnapshot) {
          const results = [];
          querySnapshot.forEach(function(doc) {
            console.log(doc.id , `user_${state.userLoged.uid}`)
            if (doc.id !== `user_${state.userLoged.uid}`)
              results.push({ uid: doc.id, data: doc.data() });
          });
          commit("setState", { key: "usuarios", value: results });
        });
    }
  }
});
