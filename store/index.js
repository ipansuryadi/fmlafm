const initialState = () => ({
  authenticated: false
})

export const state = initialState()

export const actions = {
  setAuthentication({ commit }, payload) {
    commit('updateAuthentication', payload)
  }
}

export const mutations = {
  updateAuthentication(state, payload) {
    state.authenticated = payload
  }
}
