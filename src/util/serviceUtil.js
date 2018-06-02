import axios from 'axios'
import store from '../store'

export const serviceUtil = (config) => {
  const {
    url
  } = config
  store.dispatch('showLoader')
  return axios({
    url,
    method: 'get',
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      store.dispatch('hideLoader')
      return response
    })
    .catch(error => {
      store.dispatch('hideLoader')
      console.log(error)
    })
}
