<template>
  <div>
    <h2>
      Add post
    </h2>

    <PostEditor 
      :content.sync="content"
      :author.sync="author"
      :title.sync="title"
      :published.sync="published"
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
  data() {
    return {
      content: {
        json: {},
        html: ''
      },
      published: false,
      author: '',
      title: ''
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
        title: this.title
      }
    }
  },
  methods: {
    async submit() {
      await this.postsDB.add(this.post)
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>
