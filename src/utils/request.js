import axios from 'axios'
import AES from '@/utils/crypto'
// create an axios instance
const service = axios.create({
  baseURL: 'https://sy.szduopin.com/api', // url = base url + request url
  // baseURL: 'http://159.75.224.219:5000',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // 请求头添加加密信息
    const Authorization = AES.encrypt(JSON.stringify({
      sign: '4fc0dc8eeefe4a3c905f9f49cf1f69af',
      nonce: +new Date()
    }))
    config.headers['Authorization'] = Authorization;
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = JSON.parse(AES.decrypt(response.data));
    console.log(res, "::::::::::::res");

    // if the custom code is not 20000, it is judged as an error.
    if (res.StatusCode == 0 || res.StatusCode == 3001) {
      return res.Body || res
    } else {
      return Promise.reject(res.StatusMsg || 'Error')
    }
  },
  error => {
    console.log('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service