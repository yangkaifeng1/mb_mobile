import { jsonp } from 'common/js/jsonp'
import axios from 'axios'

export function getIndex () {
  const url = '/api/index'

  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

