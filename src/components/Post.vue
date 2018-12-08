<template>
  <div>
    <h3>
      {{ title }}
    </h3>
    <div v-html="content.html" />
    <p>
      {{ author }}
    </p>
    <p>
      {{ date }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    author: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: Object,
      default() {
        return {}
      }
    },
    date: {
      type: String,
      default: ''
    },
    published: {
      type: Boolean,
      default: false
    } 
  }
}
</script>
