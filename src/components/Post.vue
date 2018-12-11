<template>
  <div>
    <h3>
      {{ title }}
    </h3>
    <div v-html="content.html" />
    <p>
      {{ author }}
    </p>
    <p>
      {{ date }}
    </p>
    <div v-if="isEditable">
      <button>
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
    date: {
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
    }
  },
  methods: {
    deletePost() {
      this.$store.dispatch('deletePost', this.postId)
    }
  }
}
</script>
