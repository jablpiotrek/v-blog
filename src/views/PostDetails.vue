<template>
  <div id="post-details">
    <post
      v-if="post"
      :post-id="id"
      :title="post.data.title"
      :date="post.data.date"
      :published="post.data.published"
      :abstract="post.data.abstract"
      :content="post.data.content"
      :author="post.data.author"
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
    id() {
      return this.$route.params.postId
    },
    post() {
      return this.$store.getters.postById(this.id)
    },
  }
}
</script>
