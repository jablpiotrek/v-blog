<template>
  <div class="no-posts">
    <p class="no-posts__info">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  name: 'NoPosts'
}
</script>

<style lang="scss">
.no-posts {
  display: flex;
  justify-content: center;
  &__info {
    margin-top: $spacer-large;
    font-size: $font-big;

    @media #{$screen-medium} {
      font-size: $font-large;
    }
  }
}
</style>

