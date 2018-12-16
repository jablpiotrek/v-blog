<template>
  <div>
    <h2>
      Edit Post
    </h2>

    <PostEditor 
      v-if="post"
      :content.sync="post.content"
      :author.sync="post.author"
      :title.sync="post.title"
      :published.sync="post.published"
    />

    <button
      type="button"
      @click="submit"
    >
      Submit post
    </button>
  </div>
</template>

<script>
import PostEditor from '../components/PostEditor.vue'

export default {
  components: {
    PostEditor
  },
  computed: {
    id() {
      return this.$route.params.postId
    },
    post() {
      return this.$store.getters.postById(this.id).data
    }
  },
  methods: {
    async submit() {
      await this.$store.dispatch('updatePost', {
        id: this.id,
        data: {
          author: this.post.author,
          title: this.post.title,
          content: this.post.content,
          published: this.post.published
        }
      })
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>
