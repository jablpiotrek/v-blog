<template>
  <div id="edit-post">
    <h2>
      Edit Post
    </h2>

    <PostEditor 
      v-if="post"
      :content.sync="post.content"
      :author.sync="post.author"
      :title.sync="post.title"
      :published.sync="post.published"
      :abstract.sync="post.abstract"
    />

    <button
      type="button"
      @click="submit"
    >
      Save post
    </button>

    <button
      type="button"
      @click="close"
    >
      Close
    </button>
  </div>
</template>

<script>
import PostEditor from '../components/PostEditor.vue'
import time from '../mixins/time'
export default {
  components: {
    PostEditor
  },
  mixins: [time],
  computed: {
    id() {
      return this.$route.params.postId
    },
    post() {
      return this.$store.getters.postById(this.id).data
    },
    postsDB() {
      return this.$store.state.postsDB
    }
  },
  methods: {
    async submit() {
      this.post.editTime = this.time()
      await this.postsDB.doc(this.id).set(this.post)
      this.$router.push({
        name: 'home'
      })
    },
    close() {
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>
