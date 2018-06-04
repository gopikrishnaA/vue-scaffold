import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  loading: false,
  info: {
    joke: 'Loading ...'
  },
  summary: {
    items: [],
    isSort: false,
    status: 'All'
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
