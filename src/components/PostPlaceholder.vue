<template>
  <div class="post-placeholder">
    <list-loader />
  </div>
</template>

<script>
import {
  ListLoader
} from 'vue-content-loader'

export default {
  name: 'PostPlaceholder',
  components: {
    ListLoader
  }
}
</script>

<style lang="scss">
.post-placeholder {
  width: 100%;
}
</style>

