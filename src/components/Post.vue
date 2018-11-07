<template>
  <div>
    <h3>
      { title }
    </h3>
    <div v-html="content">
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>
