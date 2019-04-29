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
      @click="showDeleteModal"
    >
      Delete
    </button>
    <modal :name="`delete-post-modal-${postId}`">
      <modal-content 
        :header="deletePostModal.header"
        :text="deletePostModal.text"
        :actions="deletePostModal.actions"
      />
    </modal>
  </div>
</template>

<script>
import ModalContent from './ModalContent.vue'

export default {
  name: "PostControlButtons",
  components: {
    ModalContent
  },
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  data() {
    return{
      deletePostModal: {
        header: 'Delete post',
        text: 'Do you really want to delete post?',
        actions: [
          {
            title: 'Delete',
            handler: this.deletePost
          },
          {
            title: 'Cancel',
            handler: this.hideDeletePopup
          }
        ]
      }
    }
  },
  computed: {
    postsDB(){
      return this.$store.state.postsDB
    }
  },
  methods: {
    showDeleteModal() {
      this.$modal.show(`delete-post-modal-${this.postId}`)
    },
    hideDeletePopup() {
      this.$modal.hide(`delete-post-modal-${this.postId}`)
    },
    editPost() {
      this.$router.push({
        name: 'edit-post', 
        params: {
          postId: this.postId
        } 
      })
    },
    async deletePost() {
      await this.postsDB.doc(this.postId).delete()
      this.hideDeletePopup()
    }
  }
}
</script>
