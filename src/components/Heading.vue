<template>
  <header :class="`heading ${isScrolled ? 'heading--compact' : ''}`">
    <div class="heading__content">
      <router-link
        to="/"
        class="heading__home-link"
      >
        <h1 class="heading__title">
          <span class="heading__keyword">blog</span>.jablonski.<strong>tech</strong>
        </h1>
      </router-link>
      <h2 class="heading__sentence">
        { <span class="heading__sentence heading__sentence--keyword">webdev</span> +  <span class="heading__sentence heading__sentence--keyword">stuff</span> }
      </h2>
    </div>
    <div class="heading__navigation">
      <navigation v-if="showNavigation" />
    </div>
  </header>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'Heading',
  components: {
    Navigation
  },
  data() {
    return {
      isScrolled: false
    }
  },
  computed: {
    showNavigation() {
      return this.$store.getters.isUserLoggedIn
    }
  },
  mounted() {
    window.onscroll = () => {
      this.handleScroll()
    }
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 20
    }
  }
}
</script>

<style lang="scss" scoped>
.heading {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  box-sizing: border-box;
  width: 100%;
  min-height: 70px;
  background: $primary;
  border-bottom: 10px solid $secondary;
  @include transition(height);
  transform: translateZ(0);

  &--compact {
    min-height: 42px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: $spacer-small 0;

    @media #{$screen-medium} {
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: flex-end;
      padding: $spacer-small $spacer-big;
    }
  }

  &__title {
    color: $white;
    margin: 0;
    font-weight: normal;
    text-transform: uppercase;
    font-family: $sans-serif;
    font-size:  $font-large;

    @include transition(font-size);

    @media #{$screen-medium} {
      font-size: $font-extra-large;
      align-self: center;
      .heading--compact & {
        font-size: $font-large;
      }
    }
  }

  &__keyword {
    color: $secondary;
    text-transform: none;
  }

  &__sentence {
    position: relative;
    margin: 0;
    color: $white;
    text-transform: lowercase;
    font-family: $sans-serif;
    font-size: $font-base;

    .heading--compact & {
      display: none;
    }

    &--keyword {
      color: $secondary;
    }

    @media #{$screen-medium} {
    }
  }

  &__home-link {
    text-decoration: none;
  }
}
</style>
