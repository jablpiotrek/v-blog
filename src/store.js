import Vue from 'vue'
import Vuex from 'vuex'

import * as firebase from 'firebase/app'
import 'firebase/firestore'

import firebaseConfig from './firebase-config'
import firestoreSettings from './firestore-settings'

firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore()

firestore.settings(firestoreSettings)

firestore.enablePersistence()
  .catch(function(err) {
    console.log(`Offline data persistence unable to init due to error ${err.code}`)
  })

const postsDB = firestore.collection(firebaseConfig.postsCollection)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    postsDB,
    posts: [],
    currentUser: null
  },
  getters: {
    isUserLoggedIn(state) {
      return !!state.currentUser
    },
    postById(state) {
      return id => state.posts.filter((post) => {
        return post.id === id
      })[0]
    }
  },
  mutations: {
    updatePosts(state, posts){
      state.posts = posts
    },
    currentUser(state, user) {
      state.currentUser = user
    }
  },
  actions: {
    watchPosts({ commit }){
      postsDB.onSnapshot(response => {
        let posts = [] 
        response.forEach(post => {
          posts.push({
            id: post.id,
            data: post.data()
          })
        })      
        commit('updatePosts', posts)
      })
    },
    setCurrentUser({ commit }, user) {
      commit('currentUser', user)
    }
  }
})
