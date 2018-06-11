import { jsonp } from 'common/js/jsonp'
import axios from 'axios'
import { token } from './config'

console.log(token)

axios.defaults.headers.common['Authorization'] = token

axios.defaults.headers.post['Content-type'] = 'application/json'

export function getIndex () {
  const url = '/apis/toIndex'

  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

