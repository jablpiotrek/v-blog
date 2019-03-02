<template>
  <div id="app">
    <navigation />
    <main-content />
  </div>
</template>

<script>

import Navigation from './components/Navigation.vue'
import Loading from './components/Loading.vue'

const MainContent = () => ({
  component: import('./components/MainContent.vue'),
  loading: Loading
})

export default {
  name: "App",
  components: {
    Navigation,
    MainContent
  }
}
</script>
