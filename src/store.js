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
    userfb: null,
    mensajes: [],
    usuarios: [],
    suscriptorMensajes: null,
    suscriptorUsuarios: null
  },
  mutations: {
    setState: (state, pay) => {
      state.hasOwnProperty(_get(pay, "key", "NA"))
        ? (state[_get(pay, "key", "NA")] = _get(pay, "value", null))
        : null;
    }
  },
  actions: {
    startProcess({ commit, state, dispatch }) {
      if (state.started) return;
      commit("setState", { key: "started", value: true });
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          commit("setState", {
            key: "userLoged",
            value: _pick(user, ["displayName", "email", "emailVerified", "uid"])
          });
          firebase
            .firestore()
            .collection("usuario")
            .doc(`user_${user.uid}`)
            .get()
            .then(fbuser => {
              commit("setState", {
                key: "userfb",
                value: { uid: fbuser.uid, ...fbuser.data() }
              });
            });
          if (!state.suscriptorMensajes) dispatch("obtenerMensajesParaMi");
          if (!state.suscriptorUsuarios) dispatch("obtenerPosiblesUsuarios");
        } else {
          commit("setState", { key: "userLoged", value: null });
          commit("setState", { key: "userfb", value: null });
          if (
            state.suscriptorMensajes &&
            typeof state.suscriptorMensajes === "function"
          ) {
            state.suscriptorMensajes();
            commit("setState", { key: "suscriptorMensajes", value: null });
          }
          if (
            state.suscriptorUsuarios &&
            typeof state.suscriptorUsuarios === "function"
          ) {
            state.suscriptorUsuarios();
            commit("setState", { key: "suscriptorUsuarios", value: null });
          }
          commit("setState", { key: "mensajes", value: [] });
          commit("setState", { key: "usuarios", value: [] });
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
      const listener = firebase
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
      commit("setState", { key: "suscriptorMensajes", value: listener });
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
      if (!state.userLoged) return;
      const listener = firebase
        .firestore()
        .collection("usuario")
        .onSnapshot(function(querySnapshot) {
          const results = [];
          querySnapshot.forEach(function(doc) {
            if (doc.id !== `user_${state.userLoged.uid}`)
              results.push({ uid: doc.id, data: doc.data() });
          });
          commit("setState", { key: "usuarios", value: results });
        });
      commit("setState", { key: "suscriptorUsuarios", value: listener });
    }
  }
});
