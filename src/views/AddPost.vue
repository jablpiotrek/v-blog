<template>
  <div id="add-post">
    <h2>
      Add post
    </h2>

    <post-editor
      :html.sync="html"
      :author.sync="author"
      :title.sync="title"
      :published.sync="published"
      :abstract.sync="abstract"
      :thumbnail.sync="thumbnail"
    />

    <post-edit-controls @submit="submit" />
  </div>

</template>

<script>
import PostEditor from '../components/PostEditor.vue'
import PostEditControls from '../components/PostEditControls.vue'

import time from '../mixins/time'

export default {
  name: 'AddPost',
  components: {
    PostEditor,
    PostEditControls
  },
  mixins: [time],
  data() {
    return {
      html:'',
      published: false,
      author: '',
      title: '',
      abstract: '',
      editTime: '',
      thumbnail:''
    }
  },
  computed: {
    postsDB() {
      return this.$store.state.postsDB
    },
    post() {
      return {
        author: this.author,
        html: this.html,
        published: this.published,
        title: this.title,
        abstract: this.abstract,
        editTime: this.editTime,
        thumbnail: this.thumbnail
      }
    },
    docId() {
      const title = this.post.title
      const reg = /[^a-zA-Z\d]/g
      const titleId = title.replace(reg, '-')
      return `${titleId}-${Math.random().toString(36).substr(2, 10)}`
    }
  },
  methods: {
    async submit() {
      this.editTime = this.time()
      await this.postsDB.doc(this.docId).set(this.post).catch(() => {
        console.error('Error during post add!')
      })
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>
