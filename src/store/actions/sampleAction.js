import { serviceUtil } from '@/util/serviceUtil'
import {
  RATE_JOKE,
  SET_JOKE,
  SHOW_LOADER,
  HIDE_LOADER,
  SORT_ORDER,
  SELECT_STATUS
} from '../mutation-types'

export const sampleActions = {
  getJoke: ({ commit }) => {
    serviceUtil({ url: 'https://icanhazdadjoke.com' })
      .then(res => {
        commit(SET_JOKE, res.data)
      })
  },
  rateJoke: ({ commit }, payload) => {
    commit(RATE_JOKE, payload)
  },
  showLoader: ({ commit }) => {
    commit(SHOW_LOADER)
  },
  hideLoader: ({ commit }) => {
    commit(HIDE_LOADER)
  },
  sortOrder: ({ commit }) => {
    commit(SORT_ORDER)
  },
  selectStatus: ({ commit }, payload) => {
    commit(SELECT_STATUS, payload)
  }
}
