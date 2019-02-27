<template>
  <div>
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
</template>

<script>
export default {
  name: "PostControlButtons",
  props: {
    postId: {
      type: String,
      required: true
    },
  },
  computed: {
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
