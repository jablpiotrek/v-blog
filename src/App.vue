<template>
  <div class="app">
    <main-content />
    <particles-background v-if="particlesBackgroundVisible" />
  </div>
</template>

<script>

import Loading from './components/Loading.vue'

const MainContent = () => ({
  component: import(/* webpackChunkName: 'main-content-component' */'./components/MainContent.vue'),
  loading: Loading,
  delay: 100
})

const ParticlesBackground = () => import(/* webpackChunkName: 'particles-background-component' */'./components/ParticlesBackground')

export default {
  name: "App",
  components: {
    MainContent,
    ParticlesBackground
  },
  computed: {
    particlesBackgroundVisible() {
      return this.$route.path === "/"
    }
  }
}
</script>

<style lang="scss">
.app {
  height: 100%;
}
</style>
