<template>
  <div id="home">
    <post-thumbnail
      v-for="post in posts"
      :key="post.id"
      :post-id="post.id"
      :title="post.data.title"
      :date="post.data.date"
      :published="post.data.published"
      :abstract="post.data.abstract"
    />

    <post-placeholder v-if="!posts.length" />
  </div>
</template>

<script>

import PostThumbnail from '../components/PostThumbnail.vue'
import PostPlaceholder from '../components/PostPlaceholder.vue'

export default {
  components: {
    PostThumbnail,
    PostPlaceholder
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  }
}
</script>
