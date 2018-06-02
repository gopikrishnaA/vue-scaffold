import {
  SET_JOKE,
  RATE_JOKE,
  SHOW_LOADER,
  HIDE_LOADER
} from '../mutation-types'

export const sampleMutations = {
  [SET_JOKE] (state, { id, joke }) {
    state.info = {
      id,
      joke
    }
  },
  [RATE_JOKE] (state, payload) {
    state.items = {
      ...state.items,
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
  }
}
