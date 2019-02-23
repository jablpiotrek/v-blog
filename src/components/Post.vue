<template>
  <div>
    <h3>
      {{ title }}
    </h3>
    <div v-html="content.html" />
    <p>
      {{ author }}
    </p>
    <div v-if="isEditable">
      <button
        type="button"
        @click="editPost"
      >
        Edit
      </button>
      <button
        type="button"
        @click="deletePost"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    postId: {
      type: String,
      required: true
    },
    author: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: Object,
      default() {
        return {}
      }
    },
    published: {
      type: Boolean,
      default: false
    } 
  },
  computed: {
    isEditable(){
      return this.$store.getters.isUserLoggedIn
    },
    postsDB(){
      return this.$store.state.postsDB
    }
  },
  methods: {
    deletePost() {
      this.postsDB.doc(this.postId).delete()
    },
    editPost() {
      this.$router.push({
        name: 'edit-post', 
        params: {
          postId: this.postId
        } 
      })
    }
  }
}
</script>
