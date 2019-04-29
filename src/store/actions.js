const actions = {
  watchPosts({ commit, state, getters }){
    // detach posts listener if present
    if (state.postsListener) {
      state.postsListener()
    }

    // decide which db query use
    const db = getters.isUserLoggedIn ? state.postsDB : state.publishedPostsDB
    
    // attach listener
    state.postsListener = db.onSnapshot(response => {
      let posts = [] 
      response.forEach(post => {
        posts.push({
          id: post.id,
          data: post.data()
        })
      })      
      
      // put fetched data in vuex store
      commit('updatePosts', posts)
      commit('setPostsFetched', true)
    })
  },
  setCurrentUser({ commit }, user) {
    commit('currentUser', user)
  }
}

export default actions
