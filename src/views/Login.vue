<template>
  <div>
    <h2>
      Sign in
    </h2>
    <form 
      v-if="!isUserLoggedIn" 
      name="login"
    >
      <div>
        <label for="">e-mail</label>
        <input 
          v-model="email" 
          type="email" 
          name="email" 
          autocomplete="email"
        >
      </div>
      <div>
        <label for="">Password</label>
        <input 
          v-model="password" 
          type="password" 
          name="password" 
          autocomplete="password"
        >
      </div>
      <button 
        type="button" 
        name="log-in" 
        @click="logIn"
      >
        Sign in
      </button>
    </form>
    <div v-else>
      <p>
        You are logged in.
      </p>
      <button 
        type="button" 
        name="password" 
        @click="logOut"
      >
        Log out
      </button>
    </div>
    <p v-if="authError">
      {{ authError.message }}
    </p>
  </div>
</template>

<script>
import firebase from "firebase/app"
import "firebase/auth"

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      authError: {}
    }
  },
  computed: {
    isUserLoggedIn() {
      return !!this.$store.state.currentUser
    }
  },
  methods: {
    logIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.authError = null
        })
        .catch(error => {
          this.authError = error
        })
    },
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.authError = null
        })
        .catch(error => {
          this.authError = error
        })
    }
  }
}
</script>
