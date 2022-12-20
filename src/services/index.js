import { create } from 'apisauce';
import env from '../config/env';
import { getCookies } from '../store/useCookies';
export const ip = 'http://192.168.1.169:2000';

export const MODE_API = {
  DEVELOPMENT: env.url_dev,
  UAT: env.url_uat,
  PRODUCTION: env.url_prd,
}

export const CONNECT_API = MODE_API[`${env.node}`.toUpperCase()]

const api = create({
  baseURL: CONNECT_API,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 50000 // 10 seconds
})

const apiupload = create({
  baseURL: CONNECT_API,
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
    'Accept': 'multipart/form-data'
  }
})

const apifin = create({
  baseURL: 'https://www.fininsurance.co.th',
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
    'Accept': 'multipart/form-data'
  }
})

/**
 * ฟังก์ชั่นสำหรับ ยิงข้อมูล
 * @param {string} path 
 * @param {{}} obj 
 * @return {{}}
 */
export const POST = (path, obj, token = getCookies('token_lmt')) =>
  new Promise((resolve, reject) => {
    api.post(path, obj, {
      headers: {
        'Authorization': token
      }
    })
      .then(response => {
        if (response.ok) {
          resolve(response.data)
        } else {
          response.data ? reject(response.data) : reject({ success: false, message: response.problem })
        }
      }).catch(err => reject(err))
  })


/**
 * ฟังก์ชั่นสำหรับ ดึงข้อมูล
 * @param {string} path 
 * 
 */
export const GET = (path, token = getCookies('token_lmt')) =>
  new Promise((resolve, reject) => {
    api.get(path, {}, {
      headers: {
        'Authorization': token
      }
    })
      .then(response => {
        if (response.ok) {
          resolve(response.data)
        } else {
          response.data ? reject(response.data) : reject({ success: false, message: response.problem })
        }
      }).catch(err => reject(err))
  })


export const UPLOAD = (path, formdata, token = getCookies('token_lmt')) =>
  new Promise((resolve, reject) => {
    apiupload.post(path, formdata, {
      headers: {
        'Authorization': token,
      }
    })
      .then(response => {
        if (response.ok) {
          resolve(response.data)
        } else {
          response.data ? reject(response.data) : reject({ success: false, message: response.problem })
        }
      }).catch(err => reject(err))
  })

export const UPLOADOtherAPI = (path, formdata) =>
  new Promise((resolve, reject) => {
    apifin.post(path, formdata, {})
      .then(response => {
        if (response.ok) {
          resolve(response.data)
        } else {
          response.data ? reject(response.data) : reject({ success: false, message: response.problem })
        }
      }).catch(err => reject(err))
  })

/* ################################################## URL ################################################## */
export const LOGIN = `/authen/login`;
export const HANDLE_TOKEN = `/authen/onHandleTokenWebLark`;
export const REGISTER = `/authen/register`;
export const GET_PROFILE = `/authen/get_profile`

export const GET_TASK = `/taskIt/getDataTaskIt`
export const INSERT_COMMENT = `/taskIt/insertComment`
export const GET_OPTION_SEARCH = `/taskIt/getOptionSearch`
export const GET_COMMENT_BYID = (reqId) => `/taskIt/getCommentByReqId?request_id=${reqId}`


