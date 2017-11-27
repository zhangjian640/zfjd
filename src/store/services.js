import axios from 'axios'

const baseUrl = ''

class Services {
  fetchReal () {
    return axios.get(`${baseUrl}/api/real`)
  }
}

export default new Services()
