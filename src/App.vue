<template>
  <div id="app">
    <navigation />
    <main-content />
    <loading v-if="isLoading" />
  </div>
</template>

<script>

import Navigation from './components/Navigation.vue'
import Loading from './components/Loading.vue'

export default {
  name: "App",
  components: {
    Navigation,
    Loading,
    MainContent: () => import( './components/MainContent.vue')
  },
  computed: {
    isLoading() {
      return !this.$store.state.mainContentReady
    }
  }
}
</script>
