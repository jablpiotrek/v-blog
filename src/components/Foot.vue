<template>
  <footer class="foot">
    <ul class="foot__links">
      <li class="foot__item">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/piotr-jablonski-008b2799/"
        >
          <icon
            title="linkedin"
            class-name="foot__icon"
          />
        </a>
      </li>
      <li class="foot__item">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/jablpiotrek"
        >
          <icon
            title="github"
            class-name="foot__icon"
          />
        </a>
      </li>
    </ul>
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
  display: block;
  background-color: $primary;
  border-top: 12px solid $secondary;

  &__links {
    display: flex;
    justify-content: center;
    list-style: none;
  }

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
