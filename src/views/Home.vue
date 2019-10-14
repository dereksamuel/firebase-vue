<template>
<div style="min-width: 100vw; min-height: 100vh;">
  <Menu />
  <router-view />
</div>
</template>

<script>
import Menu from "./components/Menu"

export default {
  name: "home",

  components: {
    Menu
  }
};
</script>
