<template>
  <footer class="foot">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/piotr-jablonski-008b2799/"
      class="foot__item"
    >
      <icon
        title="linkedin"
        class-name="foot__icon"
      />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/jablpiotrek"
      class="foot__item"
    >
      <icon
        title="github"
        class-name="foot__icon"
      />
    </a>
  </footer>
</template>

<script>
import Icon from './Icon.vue'
export default {
  name: 'Foot',
  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
.foot {
  display: flex;
  justify-content: center;
  background-color: $primary;
  border-top: 12px solid $secondary;

  &__item {
    display: block;
    margin: 0 $spacer-small;
  }

  &__icon {
    fill: $white;
    &:hover,
    &:focus {
      fill: $secondary;
    }
  }
}
</style>
