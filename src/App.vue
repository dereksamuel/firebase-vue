<template lang="pug">
  router-view.container-fluid
</template>

<script>
export default {
  created() {
    this.$store.dispatch("startProcess");
  }
};
</script>
