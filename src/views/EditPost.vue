<template>
  <div id="edit-post">
    <h2>
      Edit Post
    </h2>

    <PostEditor
      v-if="post"
      :html.sync="post.data.html"
      :author.sync="post.data.author"
      :title.sync="post.data.title"
      :published.sync="post.data.published"
      :abstract.sync="post.data.abstract"
    />
    <Loading v-else />

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
import Loading from '../components/Loading.vue'
export default {
  components: {
    PostEditor,
    Loading
  },
  mixins: [time],
  computed: {
    id() {
      return this.$route.params.postId
    },
    post() {
      return this.$store.getters.postById(this.id)
    },
    postsDB() {
      return this.$store.state.postsDB
    }
  },
  methods: {
    async submit() {
      this.post.editTime = this.time()
      await this.postsDB.doc(this.id).set(this.post.data).catch(() => {
        console.error('Error during post edit!')
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
