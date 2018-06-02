import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  loading: false,
  info: {
    joke: 'Loading ...'
  },
  items: []
}
const getters = {
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
