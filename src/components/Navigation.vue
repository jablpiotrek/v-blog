<template>
  <nav class="navigation">
    <ul class="navigation__links">
      <li class="navigation__link">
        <router-link
          to="/"
          replace
        >
          Home
        </router-link>
      </li>
      <li
        v-if="this.$store.getters.isUserLoggedIn"
        class="navigation__link"
      >
        <router-link
          to="/add-post"
          replace
        >
          Add Post
        </router-link>
      </li>
      <li class="navigation__link">
        <router-link
          to="/login"
          replace
        >
          Login
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style lang="scss">
.navigation {
  padding-top: $spacer;
  background: $secondary;

  &__links {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    font-size: $font-base;
    list-style: none;

    @media #{$screen-medium} {
      flex-direction: row;
    }
  }

  &__link {
    margin: 0;
    text-decoration: none;

    a {
      display: block;
      height: $spacer-big;
      line-height: $spacer-big;
      margin: 0 $spacer;
      padding: 0 $spacer;
      text-decoration: none;
      text-transform: uppercase;
      border: 1px solid transparent;
      text-align: center;

      @media #{$screen-medium} {
        margin: 0;
      }

      &:hover,
      &:focus {
        font-weight: bold;
      }
    }
  }
}
</style>
