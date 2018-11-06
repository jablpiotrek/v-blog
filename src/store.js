import Vue from "vue";
import Vuex from "vuex";

import * as firebase from "firebase/app";
import "firebase/firestore";

import firebaseConfig from "./firebase-config";
import firestoreSettings from "./firestore-settings";

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
firestore.settings(firestoreSettings);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {}
});
