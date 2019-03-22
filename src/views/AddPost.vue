<template>
  <div id="add-post">
    <h2>
      Add post
    </h2>

    <PostEditor 
      :content.sync="content"
      :author.sync="author"
      :title.sync="title"
      :published.sync="published"
      :abstract.sync="abstract"
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
import time from '../mixins/time'

export default {
  components: {
    PostEditor
  },
  mixins: [time],
  data() {
    return {
      content: {
        json: {},
        html: ''
      },
      published: false,
      author: '',
      title: '',
      abstract: '',
      editTime: ''
    }
  },
  computed: {
    postsDB() {
      return this.$store.state.postsDB
    },
    post() {
      return {
        author: this.author,
        content: this.content,
        published: this.published,
        title: this.title,
        abstract: this.abstract,
        editTime: this.editTime
      }
    }
  },
  methods: {
    async submit() {
      this.editTime = this.time()
      await this.postsDB.add(this.post)
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>
