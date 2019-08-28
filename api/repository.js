import { BASE_URL } from '../utils/constant'
// Provide nuxt-axios instance to use same configuration across the whole project
// I've used typical CRUD method names and actions here
export default ($axios) => (resource) => ({
  index() {
    return $axios.$get(`${BASE_URL}${resource}`)
  },

  show(id) {
    return $axios.$get(`${BASE_URL}${resource}/${id}`)
  },

  create(payload) {
    return $axios.$post(`${BASE_URL}${resource}`, payload)
  },

  update(id, payload) {
    return $axios.$post(`${BASE_URL}${resource}/${id}`, payload)
  },

  delete(id) {
    return $axios.$delete(`${BASE_URL}${resource}/${id}`)
  }
})
