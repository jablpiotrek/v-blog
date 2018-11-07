<template>
  <div>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li v-if="this.$store.getters.isUserLoggedIn">
        <router-link to="add-post">Add Post</router-link>
      </li>
      <li>
        <router-link to="login">Login</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation",
}
</script>
