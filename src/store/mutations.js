import * as types from './mutation-types'

export default {
  [types.GET_REAL_DAY] (state, data) {
    state.realDay = data.result
  },
  [types.GET_REAL_WEEK] (state, data) {
    state.realWeek = data.result
  },
  [types.GET_REAL_MONTH] (state, data) {
    state.realMonth = data.result
  },
  [types.GET_REAL_YEAR] (state, data) {
    state.realYear = data.result
  }
}
