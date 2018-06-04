import {
  SET_JOKE,
  RATE_JOKE,
  SHOW_LOADER,
  HIDE_LOADER,
  SORT_ORDER,
  SELECT_STATUS
} from '../mutation-types'

export const sampleMutations = {
  [SET_JOKE] (state, { id, joke }) {
    state.info = {
      id,
      joke
    }
  },
  [RATE_JOKE] ({summary}, payload) {
    summary.items = {
      ...summary.items,
      [payload.id]: {
        status: payload.status,
        joke: payload.joke,
        id: payload.id,
        timeStamp: new Date().toLocaleString()
      }
    }
  },
  [SHOW_LOADER] (state) {
    state.loading = true
  },
  [HIDE_LOADER] (state) {
    state.loading = false
  },
  [SORT_ORDER] (state) {
    state.summary.isSort = !state.summary.isSort
  },
  [SELECT_STATUS] (state, payload) {
    state.summary.status = payload
  }
}
