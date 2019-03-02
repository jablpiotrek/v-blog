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
    <h3
      v-if="!posts.length"
    >
      There are no posts to show.
    </h3>
  </div>
</template>

<script>

import PostThumbnail from '../components/PostThumbnail.vue'

export default {
  components: {
    PostThumbnail
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  }
}
</script>
