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
  height: 20px;
  background: $secondary;

  &__links {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0;
  }

  &__link {
    height: 100%;
    margin: 0;
  }
}
</style>
