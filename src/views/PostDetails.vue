<template>
  <div>
    <post-placeholder v-if="isLoading" />
    <no-post v-else-if="!post" >
      There is no such post.
    </no-post>
    <post
      v-else
      :post-id="id"
      :title="post.data.title"
      :edit-time="post.data.editTime"
      :published="post.data.published"
      :html="post.data.html"
      :author="post.data.author"
      :abstract="post.data.abstract"
      :thumbnail="post.data.thumbnail"
    />
  </div>
</template>

<script>
import Post from '../components/Post.vue'
import PostPlaceholder from '../components/PostPlaceholder.vue'
import NoPost from '../components/NoPosts.vue'

export default {
  components: {
    Post,
    PostPlaceholder,
    NoPost
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
