import Vue from "vue";
import Vuex from "vuex";
import _get from "lodash/get";
import _pick from "lodash/pick";
import { firebase } from "./helpers/firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    started: false,
    userLoged: null
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
    }
  }
});
