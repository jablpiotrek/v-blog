<template>
  <div>
    <h3>
      {{ title }}
    </h3>
    <p>
      {{ abstract }}
    </p>
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
  </div>
</template>

<script>
import 'highlight.js/styles/monokai-sublime.css'

export default {
  name: 'Post',
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
    abstract: {
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
    },
    displayControls: {
      type: Boolean,
      default: true
    } 
  },
  computed: {
    isEditable(){
      return this.$store.getters.isUserLoggedIn
    }
  },
  mounted() {
    this.higlightCode()
  },
  updated() {
    this.higlightCode()
  },
  methods: {
    back() {
      this.$router.push('/')
    },
    async higlightCode() {
      const codeBlocks = document.querySelectorAll('code')

      if (codeBlocks.length) {
        const hljs = await import ('highlight.js')
        codeBlocks.forEach(block => {
          hljs.highlightBlock(block)
        })
      }
    }
  }
}
</script>
