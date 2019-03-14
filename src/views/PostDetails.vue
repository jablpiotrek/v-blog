<template>
  <div id="post-details">
    <post
      v-if="post"
      :post-id="id"
      :title="post.data.title"
      :edit-time="post.data.editTime"
      :published="post.data.published"
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
