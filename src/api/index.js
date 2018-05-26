import { jsonp } from 'common/js/jsonp'
import { options } from './config'

export function getIndex () {
  const url = 'http://192.168.5.180:8089/toIndex'

  const data = {}
  return jsonp(url, data, options)
}

