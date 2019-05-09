import { expect } from "chai"
import { mount, createLocalVue } from "@vue/test-utils"
import Vuex from 'vuex'

import Login from '@/views/Login.vue'
const localVue = createLocalVue()
localVue.use(Vuex)

describe('Login.vue', () => {
  const mocks = {
    $store: {
      state: {
        currentUser: null
      }
    }
  }

  it('Renders without error', () => {
    const wrapper = mount(Login, {mocks})
    expect(wrapper.html())
  })

  describe('Not logged user', () => {
    const mocks = {
      $store: {
        state: {
          currentUser: null
        }
      }
    }

    it('Renders properly for logged user', () => {
      const wrapper = mount(Login, {mocks})
      expect(wrapper.html()).to.contain('name="log-in"')
    })
  })

  describe('Logged user', () => {
    const mocks = {
      $store: {
        state: {
          currentUser: 'sample-user-data'
        }
      }
    }

    it('Renders properly for logged user', () => {
      const wrapper = mount(Login, {mocks})
      expect(wrapper.html()).to.contain('You are logged in.')
    })
  })
})
