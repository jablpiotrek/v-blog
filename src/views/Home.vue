<template>
  <div id="home">

    <post-placeholder v-if="!finishedLoading" />
    <template v-else-if="posts.length">
      <post-thumbnail
        v-for="post in posts"
        :key="post.id"
        :post-id="post.id"
        :title="post.data.title"
        :edit-time="post.data.editTime"
        :published="post.data.published"
        :abstract="post.data.abstract"
        :thumbnail="post.data.thumbnail"
      />
    </template>
    <no-posts v-else />

  </div>
</template>

<script>

import PostThumbnail from '../components/PostThumbnail.vue'
import PostPlaceholder from '../components/PostPlaceholder.vue'
import NoPosts from '../components/NoPosts.vue'

export default {
  components: {
    PostThumbnail,
    PostPlaceholder,
    NoPosts
  },
  computed: {
    posts() {
      return this.$store.state.posts
    },
    finishedLoading() {
      return this.$store.state.postsFetched
    }
  }
}
</script>
