<template lang="pug">
div
  Menu
  router-view
</template>

<script>
import Menu from "./components/Menu";
import { mapState, mapActions } from "vuex";

export default {
  name: "home",

  components: {
    Menu
  },

  created() {
    if (!this.userLoged) this.$router.push("/login");
    else {
      this.obtenerMensajesParaMi()
      this.obtenerPosiblesUsuarios()
    }
  },

  watch: {
    userLoged(val) {
      if (!val) this.$router.push("/login");
      else {
        this.obtenerMensajesParaMi()
        this.obtenerPosiblesUsuarios()
      }
    }
  },

  methods: {
    ...mapActions([
      "obtenerMensajesParaMi",
      "obtenerPosiblesUsuarios"
    ])
  },

  computed: {
    ...mapState(["userLoged"])
  }
};
</script>
