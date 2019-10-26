<template lang="pug">
div
  Menu
  router-view
</template>

<script>
import Menu from "./components/Menu";
import { mapState } from 'vuex';

export default {
  name: "home",

  components: {
    Menu
  },

  created() {
    if (!this.userLoged) this.$router.push("/login");
  },

  watch: {
    userLoged(val) {
      if (!val) this.$router.push("/login");
    }
  },

  computed: {
    ...mapState(["userLoged"])
  }
};
</script>
