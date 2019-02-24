const mutations = {
  updatePosts(state, posts){
    state.posts = posts
  },
  currentUser(state, user) {
    state.currentUser = user
  }
}

export default mutations
