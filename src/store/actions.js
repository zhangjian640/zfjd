import axios from 'axios'
import * as types from './mutation-types'

const baseUrl = ''

export default {
  GetRealDay: ({ commit }) => {
    axios.get(`${baseUrl}/api/realDay`).then((response) => {
      commit(types.GET_REAL_DAY, response.data)
    })
  },
  GetRealWeek: ({ commit }) => {
    axios.get(`${baseUrl}/api/realWeek`).then((response) => {
      commit(types.GET_REAL_WEEK, response.data)
    })
  },
  GetRealMonth: ({ commit }) => {
    axios.get(`${baseUrl}/api/realMonth`).then((response) => {
      commit(types.GET_REAL_MONTH, response.data)
    })
  },
  GetRealYear: ({ commit }) => {
    axios.get(`${baseUrl}/api/realYear`).then((response) => {
      commit(types.GET_REAL_YEAR, response.data)
    })
  }
}
