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
      @click="addPost"
    >
      Submit post
    </button>
  </div>

</template>

<script>
import PostEditor from '../components/PostEditor.vue'

const date = new Date()

export default {
  name: 'AddPost',
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
      title: '',
      date: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
      timestamp: date.getTime()
    }
  },
  methods: {
    addPost() {
      this.$store.dispatch('addPost', {
        author: this.author,
        title: this.title,
        content: this.content,
        published: this.published,
        date: this.date,
        timestamp: this.timestamp,
      })
    }
  }
}
</script>
