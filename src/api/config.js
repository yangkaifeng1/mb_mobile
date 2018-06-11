import md5 from 'js-md5';

export const options = {
  param: 'jsonpCallback'
}

export const ERR_OK = 0

const appKey = "e564092b0b86491a"
const appSecret = "2a9c91e06ce74bab907bed73f75d6db2"
let timeStamp = new Date().getTime()
let auth = appKey+timeStamp+appSecret
let md5Auth = md5(auth)
console.log(auth)
console.log(md5Auth)
export const token = auth + md5Auth
