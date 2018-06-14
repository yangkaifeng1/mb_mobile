import { jsonp } from 'common/js/jsonp'
import axios from 'axios'
import qs from 'qs'
import md5 from 'js-md5';

const appKey = "e564092b0b86491a"
const appSecret = "2a9c91e06ce74bab907bed73f75d6db2"
let timeStamp = new Date().getTime()
let auth = appKey+timeStamp+appSecret
let md5Auth = md5(auth)
let token = auth + md5Auth

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
