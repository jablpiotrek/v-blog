<template>
  <div class="loading">
    <loader 
      class="loading__spinner"
    />
  </div>
</template>

<script>
import Loader from '../assets/images/loader.svg'
export default {
  name: 'Loading',
  components: {
    Loader
  }
}
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__spinner {
    stroke: $secondary;
  }
}
</style>
