<template>
  <div class="hello-world">
    <div class="hello-world__header">
      <h1 class="hello-world__title">
        Hello world!
      </h1>
      <h2 class="hello-world__subtitle">
        {{ subtitle }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["subtitle"]
};
</script>

<style scoped lang="scss">
</style>
