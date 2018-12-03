import { expect } from "chai"
import { mount, createLocalVue } from "@vue/test-utils"
import Vuex from 'vuex'

import Login from "@/views/Login.vue"
const localVue = createLocalVue()
localVue.use(Vuex)

describe("Login.vue", () => {
  let mocks = {
    $store: {
      state: {
        currentUser: null
      }
    }
  }

  it("Renders without error", () => {
    const wrapper = mount(Login, {mocks})
    expect(wrapper.html())
  })

  it("Renders properly for not logged user", () => {
    const wrapper = mount(Login, {mocks})
    console.log(wrapper.html())
    expect(wrapper.html()).to.contain('<p>You are logged in.</p>')
  })
  mocks.$store.state.currentUser = 'not-empty-user-data'
  it("Renders properly for logged user", () => {
    const wrapper = mount(Login, {mocks})
    expect(wrapper.html()).to.contain('<button type="button" name="log-in">Sign in</button>')
  })
})
