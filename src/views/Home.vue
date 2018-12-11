<template>
  <div>
    <post
      v-for="post in postsToShow"
      :key="post.id"
      :post-id="post.id"
      :title="post.data.title"
      :author="post.data.author"
      :date="post.data.date"
      :content="post.data.content"
      :published="post.data.published"
    />
    <h3
      v-if="!postsToShow.length"
    >
      There are no posts to show.
    </h3>
  </div>
</template>

<script>

import Post from '../components/Post.vue'

export default {
  components: {
    Post
  },
  computed: {
    posts() {
      return this.$store.state.posts
    },
    postsToShow() {
      if (!this.$store.getters.isUserLoggedIn) {
        return this.posts.filter((post) => {
          return post.data.published
        })
      } else {
        return this.posts
      }
    }
  }
}
</script>
