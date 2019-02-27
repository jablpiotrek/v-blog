<template>
  <div>
    <h3>
      {{ title }}
    </h3>
    <p>
      {{ date }}
    </p>
    <p>
      {{ abstract }}
    </p>
    <div v-html="content.html" />
    <p> 
      {{ author }} 
    </p>
    <button
      type="button"
      @click="back"
    >
      Go to posts list
    </button>
    <post-control-buttons
      v-if="isEditable"
      :post-id="postId"
    />
  </div>
</template>

<script>
import PostControlButtons from './PostControlButtons.vue'

export default {
  name: 'Post',
  components: {
    PostControlButtons
  },
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
    author: {
      type: String,
      default: ''
    }, 
    published: {
      type: Boolean,
      default: false
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
    } 
  },
  computed: {
    isEditable(){
      return this.$store.getters.isUserLoggedIn
    }
  },
  methods: {
    back() {
      this.$router.push('/')
    }
  }
}
</script>
