const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: 'v-blog-jabl-piotrek.firebaseapp.com',
  databaseURL: 'https://v-blog-jabl-piotrek.firebaseio.com',
  projectId: 'v-blog-jabl-piotrek',
  storageBucket: 'v-blog-jabl-piotrek.appspot.com',
  messagingSenderId: '328250901941',
  postsCollection:'posts'
}
export default firebaseConfig
