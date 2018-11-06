<template>
  <div id="app">
    <hello-world 
      subtitle="some text here"
    />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
export default {
  name: "App",
  components: {
    HelloWorld
  },
  created() {
    this.$store.dispatch("getPosts");
  }
};
</script>

<style scoped lang="scss">
</style>
