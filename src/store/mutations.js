const mutations = {
  updatePosts(state, posts){
    state.posts = posts
  },
  currentUser(state, user){
    state.currentUser = user
  },
  setPostsDB(state, db){
    state.postsDB = db
  },
  setPublishedPostsDB(state, db){
    state.publishedPostsDB = db
  }
}

export default mutations
