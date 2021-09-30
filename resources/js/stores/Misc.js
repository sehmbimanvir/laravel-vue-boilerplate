const state = {
  error: {}
}

const mutations = {
  'CATCHERROR' (state, response) {
    state.error = response
  }
}

const actions = {}

const namespaced = true

const getters = {
  error: state => state.error
}

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced
}
