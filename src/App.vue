<template>
  <div id="app">
    <navigation />
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase/app"
import "firebase/auth"

import Navigation from "@/components/Navigation.vue"
export default {
  name: "App",
  components: {
    Navigation
  },
  created() {
    this.watchLoggedUser()
  },
  methods: {
    watchLoggedUser() {
      firebase.auth().onAuthStateChanged(user => {
        this.$store.dispatch('setCurrentUser', user)
        this.$store.commit('clearPosts')
        this.$store.dispatch('getPosts')
      })
    }
  },
}
</script>
