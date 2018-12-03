import Vue from "vue"
import Vuex from "vuex"

import * as firebase from "firebase/app"
import "firebase/firestore"

import firebaseConfig from "./firebase-config"
import firestoreSettings from "./firestore-settings"

firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore()
firestore.settings(firestoreSettings)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    currentUser: null
  },
  getters: {
    isUserLoggedIn(state) {
      return !!state.currentUser
    }
  },
  mutations: {
    addPosts(state, newPosts) {
      state.posts = newPosts
    },
    currentUser(state, user) {
      state.currentUser = user
    }
  },
  actions: {
    getPosts({ commit }) {
      firestore
        .collection("posts")
        .get()
        .then(response => {
          let newPosts = []
          response.forEach(doc => {
            newPosts.push(doc.data())
          })
          commit("addPosts", newPosts)
        })
    },
    setCurrentUser({ commit }, user) {
      commit("currentUser", user)
    }
  }
})
