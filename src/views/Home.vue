<template lang="pug">
div
  Menu
  router-view
</template>

<script>
import Menu from "./components/Menu";

export default {
  name: "home",

  components: {
    Menu
  }
};
</script>
