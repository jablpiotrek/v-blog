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


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    addPosts(state, newPosts) {
      state.posts = state.posts.concat(newPosts)
    },
    deletePost(state, postId) {
      state.posts = state.posts.filter((post) => {
        return post.id !== postId
      })
    },
    currentUser(state, user) {
      state.currentUser = user
    }
  },
  actions: {
    getPosts({ commit }) {
      firestore
        .collection(firebaseConfig.postsCollection)
        .get()
        .then(response => {
          let newPosts = []
          response.forEach(doc => {
            newPosts.push(
              {
                id: doc.id,
                data: doc.data()
              }
            )
          })
          commit('addPosts', newPosts)
        })
    },
    addPost({ commit }, post) {
      firestore.collection(firebaseConfig.postsCollection).add(post)
        .then((docRef) => {
          commit('addPosts', [{
            data: post,
            id: docRef.id
          }])
        })      
    },
    updatePost({ commit }, post) {
      firestore.collection(firebaseConfig.postsCollection).doc(post.id).set(post.data)
        .then(() => {
          commit('deletePost', post.id)
          commit('addPosts', [{
            id: post.id,
            data: post.data
          }])
        })
    },
    deletePost({ commit }, postId ){
      firestore.collection(firebaseConfig.postsCollection).doc(postId).delete()
        .then(() => {
          commit('deletePost', postId)
        })
    },
    setCurrentUser({ commit }, user) {
      commit('currentUser', user)
    }
  }
})
