import Vue from 'vue'
import Router from 'vue-router'
import Loading from './components/Loading.vue'
import Login from './views/Login.vue'
import PostDetails from './views/PostDetails.vue'
import EditPost from './views/EditPost.vue'
import AddPost from './views/AddPost.vue'

const Home = () => ({
  component: import(/* webpackChunkName: 'home-view' */'./views/Home.vue'),
  loading: Loading,
  delay: 100
})

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/add-post',
      name: 'add-post',
      component: AddPost
    },
    {
      path: '/edit-post/:postId',
      name: 'edit-post',
      component: EditPost
    },
    {
      path: '/post/:postId',
      name: 'post',
      component: PostDetails
    }
  ]
})
