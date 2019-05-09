<template>
  <div class="modal">
    <h2 class="modal__header">
      {{ header }}
    </h2>
    <p class="modal__text">
      {{ text }}
    </p>
    <div class="modal__actions">
      <button
        v-for="(action, key) in actions"
        :key="key"
        role="button"
        @click="action.handler"
      >
        {{ action.title }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalContent',
  props: {
    header: {
      required: false,
      default: '',
      type: String
    },
    text: {
      required: false,
      default: '',
      type: String
    },
    actions: {
      required: false,
      default: () => {
        return []
      },
      type: Array
    }
  }
}
</script>

<style>

</style>
