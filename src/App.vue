<template>
  <div id="app">
    <navigation />
    <main-content />
  </div>
</template>

<script>

import Loading from './components/Loading.vue'

const MainContent = () => ({
  component: import('./components/MainContent.vue'),
  loading: Loading,
  delay: 200
})
const Navigation = () => ({
  component: import('./components/Navigation.vue'),
})

export default {
  name: "App",
  components: {
    Navigation,
    MainContent
  }
}
</script>
