import { jsonp } from 'common/js/jsonp'
import axios from 'axios'

axios.defaults.headers.common['token'] = 'e564092b0b86491a15281893583422a9c91e06ce74bab907bed73f75d6db20edf37d6f55052bf11ed3d282965b9cd'


axios.defaults.headers.post['Content-type'] = 'application/json'

export function getIndex () {
  const url = '/apis/toIndex'

  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

