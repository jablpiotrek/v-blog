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
    },
    buttonIcon: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  mounted() {
    feather.replace({
      class: `icon ${this.buttonIcon ? 'icon--button' : ''} ${this.className}`,
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

  &:hover,
  &:focus {
    fill: $primary;
  }
  
  &--button {
    padding: 0;
    fill: none;
    margin-left: $spacer-small / 2;
    margin-right: -$spacer-small;
    &:hover,
    &:focus {
      fill: none;
    }
  }
}
</style>
