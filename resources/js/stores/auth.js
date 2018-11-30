import { Storage } from '../services/storage'
import { HTTP } from '../services/http'
const namespaced = true

const state = {
  credentials: {
    email: null,
    password: null
  },
  user: {},
  token: Storage.get('token'),
  isLoggedIn: Storage.get('token') || false
}

const mutations = {
  'RESETCREDENTIALS' (state) {
      state.credentials = {
        email: null,
        password: null
      }
  },
  'SETUSER' (state, data) {
      state.token = data.token
      state.user = data
      state.isLoggedIn = true
  },
  'UNSETUSER' (state) {
    state.token = null
    state.user = {}
    state.isLoggedIn = false
  }
}

const actions = {
  login: ({ commit }, user) => {
      return HTTP.post('login', user).then(response => {
        let data = response.data.data
        commit('RESETCREDENTIALS')
        commit('SETUSER', data)
        Storage.setJSON('user', data)
        Storage.set('token', data.token)
        return response
      })
  },
  logout: ({ commit }) => {
      return HTTP.post('logout', {}).then(response => {
        commit('UNSETUSER')
        return response
      })
  }
}

const getters = {
  credentials: state => state.credentials,
  user: state => state.user,
  token: state => state.token,
  isLoggedIn: state => state.isLoggedIn
}

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced
}
