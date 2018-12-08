<template>
  <div>
    <post
      v-for="post in posts"
      :key="post.id"
      :title="post.data.title"
      :author="post.data.author"
      :date="post.data.date"
      :content="post.data.content"
      :published="post.data.published"
    />
  </div>
</template>

<script>

import Post from '../components/Post.vue'

export default {
  components: {
    Post
  },
  computed: {
    posts() {
      return this.$store.state.posts ? this.$store.state.posts : []
    }
  }
}
</script>
