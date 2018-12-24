<template>
  <div>
    <post
      v-for="post in posts"
      :key="post.id"
      :post-id="post.id"
      :title="post.data.title"
      :author="post.data.author"
      :date="post.data.date"
      :content="post.data.content"
      :published="post.data.published"
    />
    <h3
      v-if="!posts.length"
    >
      There are no posts to show.
    </h3>
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
      return this.$store.state.posts
    }
  }
}
</script>
