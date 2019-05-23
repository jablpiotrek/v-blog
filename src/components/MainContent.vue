<template>
  <div :class="`main-content ${isUserLoggedIn ? 'main-content--logged-user' : ''}`">
    <heading />
    <main class="main-content__router-view">
      <router-view />
    </main>
    <foot />
  </div>
</template>

<script>
import firebaseConfig from '../firebase-config'
import firestoreSettings from '../firestore-settings'

import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore'

import Heading from './Heading.vue'
import Foot from './Foot.vue'

export default {
  name: 'MainContent',
  components: {
    Heading,
    Foot
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn
    }
  },
  created() {
    // init firebase app with config
    firebase.initializeApp(firebaseConfig)

    // setup firestore
    const firestore = firebase.firestore()
    firestore.settings(firestoreSettings)

    this.$store.commit('setPostsDB', firestore.collection(firebaseConfig.postsCollection))
    this.$store.commit('setPublishedPostsDB', firestore.collection(firebaseConfig.postsCollection).where('published', '==', true))

    firebase.auth().onAuthStateChanged(user => {
      this.$store.dispatch('setCurrentUser', user)
      this.$store.dispatch('watchPosts')
    })
  }
}
</script>
<style lang="scss">
.main-content {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 80px;

  &--logged-user {
    padding-top: 120px;
  }

  &__router-view {
    flex: 1 0 auto;
  }
}
</style>

