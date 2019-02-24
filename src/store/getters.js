const getters = {
  isUserLoggedIn(state) {
    return !!state.currentUser
  },
  postById(state) {
    return id => state.posts.filter((post) => {
      return post.id === id
    })[0]
  }
}

export default getters
