/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
export const state = () => ({
  authenticated: false,
  user: {}
})

export const actions = {
  async requestLogin({ commit }, payload) {
    const res = await $nuxt.$authRequest.login(payload)
    if (res) {
      commit('loginSuccess', res.data)
    }
  }
}

export const mutations = {
  loginSuccess(state, payload) {
    state.authenticated = true
    state.user = { ...payload }
  }
}
