<template>
  <div id="app">

    <main-content />
  </div>
</template>

<script>

import Loading from './components/Loading.vue'

const MainContent = () => ({
  component: import('./components/MainContent.vue'),
  loading: Loading,
  delay: 20
})

export default {
  name: "App",
  components: {
    MainContent
  }
}
</script>
