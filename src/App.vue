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
  }
};
</script>

<style scoped lang="scss">
</style>
