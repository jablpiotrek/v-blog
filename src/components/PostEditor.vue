<template>
  <div class="editor">
    <label for="title">
      Title: 
    </label>

    <input 
      v-model="titleField"
      type="text"
      name="title"
    >

    <label for="abstract">
      Abstract:
    </label>

    <textarea
      v-model="abstractField"
      type="text"
      name="abstract"
    />

    <label for="html">
      HTML:
    </label>

    <textarea
      v-model="htmlField"
      type="text"
      name="html"
    />

    <label for="author">
      Author: 
    </label>

    <input 
      v-model="authorField"
      type="text" 
      name="author"
    >

    <label for="publsihed">
      Publish post automatically
    </label>

    <input 
      v-model="publishedField"
      type="checkbox" 
      name="published" 
    >
    <post
      :title="title"
      :html="html"
      :author="author"
      :abstract="abstract"
      :display-controls="false"
      post-id="post-previev" 
    />
  </div>
</template>
<script>
import Post from './Post.vue'
export default {
  name: 'PostEditor',
  components: {
    Post
  },
  props: {
    html: {
      required: true,
      type: String
    },
    author: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    abstract: {
      required: true,
      type: String
    },
    published: {
      required: true,
      type: Boolean
    }
  },
  data() {
    return {
      htmlField: this.html,
      authorField: this.author,
      titleField: this.title,
      publishedField: this.published,
      abstractField: this.abstract
    }
  },
  watch: {
    authorField(value) {
      this.$emit('update:author', value)
    },
    titleField(value) {
      this.$emit('update:title', value)
    },
    publishedField(value) {
      this.$emit('update:published', value)
    },
    abstractField(value) {
      this.$emit('update:abstract', value)
    },
    htmlField(value) {
      this.$emit('update:html', value)
    }
  }
}
</script>
