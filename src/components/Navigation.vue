<template>
  <nav>
    <ul>
      <li>
        <router-link
          to="/"
          replace
        >
          Home
        </router-link>
      </li>
      <li v-if="this.$store.getters.isUserLoggedIn">
        <router-link
          to="/add-post"
          replace
        >
          Add Post
        </router-link>
      </li>
      <li>
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
  name: "Navigation",
}
</script>
