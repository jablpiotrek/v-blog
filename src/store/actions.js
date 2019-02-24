
const actions = {
  watchPosts({ commit,state }){
    state.postsDB.onSnapshot(response => {
      let posts = [] 
      response.forEach(post => {
        posts.push({
          id: post.id,
          data: post.data()
        })
      })      
      commit('updatePosts', posts)
    })
  },
  setCurrentUser({ commit }, user) {
    commit('currentUser', user)
  }
}

export default actions
