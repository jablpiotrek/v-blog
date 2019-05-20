<template>
  <div class="app">
    <main-content />
    <particles-background v-if="particlesBackgroundVisible" />
  </div>
</template>

<script>

import Loading from './components/Loading.vue'

const MainContent = () => ({
  component: import('./components/MainContent.vue'),
  loading: Loading,
  delay: 50
})

const ParticlesBackground = () => import('./components/ParticlesBackground')

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
}
</style>
