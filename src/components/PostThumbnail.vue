<template>
  <div>
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

    <p>
      {{ editTime }}
    </p>

    <button
      type="button"
      @click="openPost"
    >
      Go to post
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
  name: "PostThumbnail",
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
    published: {
      type: Boolean,
      default: false
    },
    editTime: {
      type: String,
      default: ''
    },
    thumbnail: {
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
    openPost() {
      this.$router.push({
        name: 'post',
        params: {
          postId: this.postId
        }
      })
    }
  }
}
</script>
