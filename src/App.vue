<template lang="pug">
  router-view
</template>

<script>
export default {
  created() {
    this.$store.dispatch("startProcess");
  }
};
</script>
