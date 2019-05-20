<template>
  <header :class="`heading ${isScrolled ? 'heading--compact' : ''}`">
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
  </header>
</template>

<script>
export default {
  name: 'Heading',
  data() {
    return {
      isScrolled: false
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
  top: 0;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: $spacer-small 0;
  background: $primary;
  border-bottom: 2px solid $secondary;
  @include transition(height);
  transform: translateZ(0);

  &--compact {
    height: 42px;
  }

  @media #{$screen-medium} {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-end;
    padding: $spacer-small $spacer-big;
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
    margin: 0;
    color: $white;
    text-transform: lowercase;
    font-family: $sans-serif;
    font-size: $font-base;
    @include transition(opacity);

    .heading--compact & {
      opacity: 0;
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
