<template>
  <div id="content">
    <heading />
    <navigation v-if="showNavigation" />
    <main>
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

import Navigation from './Navigation.vue'
import Heading from './Heading.vue'
import Foot from './Foot.vue'

export default {
  name: 'MainContent',
  components: {
    Navigation,
    Heading,
    Foot
  },
  computed: {
    showNavigation() {
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
