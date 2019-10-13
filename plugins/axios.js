/* eslint-disable no-debugger */
/* export default function ({ $axios, redirect, app, store }) {
    $axios.onError(error => {
      // with @nuxtjs/toast
      app.$toast.error('Error while making request: ' + error.response.message)
  
      // with a custom store action
      store.dispatch('error', error)
   })
  } */

export default function({ $axios, redirect, app, store }) {
  $axios.onError((error) => {
    app.$toast.error(
      `Error while making request : ${error.response.data.error}`
    )
    // store.dispatch('requestError', true)
  })
}
