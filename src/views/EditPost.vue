<template>
  <div>
    <h2>
      Edit Post
    </h2>

    <post-editor
      v-if="post"
      :html.sync="post.data.html"
      :author.sync="post.data.author"
      :title.sync="post.data.title"
      :published.sync="post.data.published"
      :abstract.sync="post.data.abstract"
      :thumbnail.sync="post.data.thumbnail"
    />

    <loading v-else />

    <post-edit-controls @submit="submit" />
  </div>
</template>

<script>
import PostEditor from '../components/PostEditor.vue'
import Loading from '../components/Loading.vue'
import PostEditControls from '../components/PostEditControls.vue'

import time from '../mixins/time'
export default {
  components: {
    PostEditor,
    Loading,
    PostEditControls
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
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>
