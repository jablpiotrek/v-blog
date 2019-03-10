import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import('./views/Login.vue')
const Home = () => import('./views/Home.vue')
const AddPost = () => import('./views/AddPost.vue')
const EditPost = () => import('./views/EditPost.vue')
const PostDetails = () => import('./views/PostDetails.vue')


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
