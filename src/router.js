import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import AddPost from './views/AddPost.vue'
import EditPost from './views/EditPost.vue'
import PostDetails from './views/PostDetails.vue'

Vue.use(Router)

export default new Router({
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
