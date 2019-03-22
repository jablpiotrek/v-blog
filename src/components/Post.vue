<template>
  <div>
    <h3>
      {{ title }}
    </h3>
    <div v-html="html" />
    <p> 
      {{ author }} 
    </p>
    <p>
      {{ editTime }}
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
import 'highlight.js/styles/monokai-sublime.css'
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
    author: {
      type: String,
      default: ''
    }, 
    published: {
      type: Boolean,
      default: false
    },
    html: {
      type: String,
      default: ''
    },
    editTime: {
      type: String,
      default: ''
    } 
  },
  computed: {
    isEditable(){
      return this.$store.getters.isUserLoggedIn
    }
  },
  async mounted() {
    const codeBlocks = document.querySelectorAll('code')
    if (codeBlocks.length) {
      this.higlightCode(codeBlocks)
    }
  },
  methods: {
    back() {
      this.$router.push('/')
    },
    async higlightCode(codeBlocks) {
      const hljs = await import ('highlight.js')
      codeBlocks.forEach(block => {
        hljs.highlightBlock(block)
      })
    }
  }
}
</script>
