<template>
  <div id="content">
    <router-view />
  </div>
</template>

<script>
import firebaseConfig from '../firebase-config'
import firestoreSettings from '../firestore-settings'

import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore'

export default {
  name: 'MainContent',
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
