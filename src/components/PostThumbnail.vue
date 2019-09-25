<template>
  <div class="post-thumbnail">
    <div class="post-thumbnail__header">
      <div class="post-thumbnail__image-container">
        <img
          :src="thumbnail"
          aria-hidden="true"
          class="post-thumbnail__image"
        >
      </div>

      <h3 class="post-thumbnail__title">
        {{ title }}
      </h3>
    </div>

    <p class="post-thumbnail__abstract">
      {{ abstract }}
    </p>

    <div class="post-thumbnail__footer">
      <p class="post-thumbnail__edit-time">
        {{ editTime }}
      </p>

      <button
        type="button"
        class="post-thumbnail__goto"
        @click="openPost"
      >
        Go to post
        <icon
          :button-icon="true"
          title="chevron-right"
          class-name="post-thumbnail__go-to-icon"
          size="24"
        />
      </button>

      <post-control-buttons
        v-if="isEditable"
        :post-id="postId"
      />
    </div>
  </div>
</template>

<script>
import PostControlButtons from './PostControlButtons.vue'
import Icon from './Icon.vue'

export default {
  name: "PostThumbnail",
  components: {
    PostControlButtons,
    Icon
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

<style lang="scss">
.post-thumbnail {
  padding-bottom: $spacer-big;
  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media #{$screen-medium} {
      flex-direction: row;
      margin-bottom: $spacer;
    }
  }

  &__image {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    @media #{$screen-medium} {
      width: 80px;
      height: 80px;
      border-radius: 40px;
    }
  }

  &__title {
    margin: $spacer 0;
    font-size: $font-big;

    @media #{$screen-medium} {
      margin-left: $spacer-big;
    }
  }

  &__footer {
    display: flex;
    flex-direction: column;
    margin-top: $spacer-big;
    justify-content: space-between;
    align-items: baseline;

    @media #{$screen-medium} {
      flex-direction: row;
    }
  }

  &__edit-time {
    font-size: $font-small;
    font-style: italic;
  }

  &__goto {
    margin-top: $spacer-big;
    width: 100%;

    @media #{$screen-medium} {
      width: auto;
      margin-top: 0;
    }
  }
}
</style>

