<template>
  <div>
    <meta
      :content="meta.url"
      property="og:url"
    >

    <meta
      content="article"
      property="og:type"
    >

    <meta
      :content="meta.title"
      property="og:title"
    >

    <meta
      :content="meta.desc"
      property="og:description"
    >

    <meta
      :content="meta.thumbnail"
      property="og:image"
    >

    <h3>
      {{ title }}
    </h3>

    <p>
      {{ abstract }}
    </p>

    <img
      :src="thumbnail"
      aria-hidden="true"
    >

    <div v-html="html" />

    <p>
      {{ author }}
    </p>

    <p>
      {{ editTime }}
    </p>

    <button
      v-if="displayControls"
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
    },
    thumbnail: {
      type: String,
      default: ''
    }
  },
  computed: {
    isEditable(){
      return this.$store.getters.isUserLoggedIn
    },
    meta() {
      return {
        url: window.location.href,
        title: this.title,
        desc: this.abstract,
        thumbnail: this.thumbnail
      }
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
