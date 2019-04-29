<template>
  <div id="post-details">
    <post-placeholder v-if="isLoading" />
    <post-not-found v-else-if="!post" />
    <post
      v-else
      :post-id="id"
      :title="post.data.title"
      :edit-time="post.data.editTime"
      :published="post.data.published"
      :html="post.data.html"
      :author="post.data.author"
    />
  </div>
</template>

<script>
import Post from '../components/Post.vue'
import PostPlaceholder from '../components/PostPlaceholder.vue'
import PostNotFound from '../components/PostNotFound.vue'

export default {
  components: {
    Post,
    PostPlaceholder,
    PostNotFound
  },
  computed: {
    id() {
      return this.$route.params.postId
    },
    post() {
      return this.$store.getters.postById(this.id)
    },
    isLoading() {
      return !this.$store.state.postsFetched
    }
  }
}
</script>
