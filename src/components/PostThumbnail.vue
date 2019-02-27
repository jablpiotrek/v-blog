<template>
  <div>
    <h3>
      {{ title }}
    </h3>

    <p>
      {{ abstract }}
    </p>
 
    <button
      type="button"
      @click="openPost"
    >
      Go to post
    </button>
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
    title: {
      type: String,
      default: ''
    },
    abstract: {
      type: String,
      default: ''
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
    openPost() {
      this.$router.push({
        name: 'post', 
        params: {
          postId: this.postId
        } 
      })
    },
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
