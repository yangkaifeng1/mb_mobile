import { jsonp } from 'common/js/jsonp'
import axios from 'axios'
import { token } from './config'
import qs from 'qs'


axios.defaults.headers.common['Authorization'] = token

// axios.defaults.headers.post['Content-type'] = 'application/json'

export function getIndex () {
  const url = '/apis/toIndex'

  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function Login (data) {
  const url = '/apis/userLogin'
  let sendData = {jsonData: data}
  return axios.post(url, qs.stringify(sendData)).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getMsgCode () {
  const url = '/apis/getMsgCode'
  var data = {jsonData: '{mobile:"188090423412",passWord:"1231231"}'}
  // data = JSON.stringify(data)

  // const data = {
  //   jsonData: '{"mobile":"15313150660"}'
  // }


  return axios.post(url, qs.stringify(data)).then((res) => {
    return Promise.resolve(res.data)
  })
}
