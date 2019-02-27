<template>
  <div>
    <h3>
      {{ title }}
    </h3>
    <p>
      {{ date }}
    </p>
    <p>
      {{ abstract }}
    </p>
    <div v-html="content.html" />
    <p> 
      {{ author }} 
    </p>
  </div>
</template>

<script>
export default {
  props: {
    postId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    abstract: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    }, 
    published: {
      type: Boolean,
      default: false
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
    } 

  }
}
</script>
