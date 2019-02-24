import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase/app'
import 'firebase/firestore'

import firebaseConfig from '../firebase-config'
import firestoreSettings from '../firestore-settings'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

// init firebase app with config
firebase.initializeApp(firebaseConfig)

// setup firestore
const firestore = firebase.firestore()
firestore.settings(firestoreSettings)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    postsDB: firestore.collection(firebaseConfig.postsCollection),
    posts: [],
    currentUser: null
  },
  actions,
  mutations,
  getters
})
