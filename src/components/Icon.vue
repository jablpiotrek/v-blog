<template>
  <i
    :data-feather="title"
  />
</template>

<script>
import feather from 'feather-icons'
export default {
  name: 'Icon',
  props: {
    title: {
      required: true,
      type: String
    },
    className: {
      required: false,
      type: String,
      default: ''
    },
    size: {
      required: false,
      type: Number,
      default: 36
    }
  },
  mounted() {
    feather.replace({
      class: `icon ${this.className}`,
      height: this.size,
      width: this.size
    })
  }
}
</script>

<style lang="scss" scoped>
.icon {
  padding: 6px;
  fill: $secondary;
  @include transition(fill);

  &:hover,
  &:focus {
    fill: $primary;
  }
}
</style>
