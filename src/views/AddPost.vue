<template>
  <div>
    <h2>
      Add post
    </h2>
    <label for="title">
      Title: 
    </label>
    <input 
      v-model="title"
      type="text"
      name="title"
    >
    <PostEditor 
      :content.sync="content"
    />
    <label for="author">
      Author: 
    </label>
    <input 
      v-model="author"
      type="text" 
      name="author"
    >
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
export default {
  name: "AddPost",
  components: {
    PostEditor
  },
  data() {
    return {
      content: {
        json: {},
        html: ''
      }
    }
  },
  methods: {
    addPost() {
      console.log(this.content.html)
      this.$store.dispatch("addPost", {
        author: this.author,
        title: this.title,
        content: this.content.html
      })
    }
  }
}
</script>
