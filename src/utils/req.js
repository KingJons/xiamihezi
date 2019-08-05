import axios from 'axios'

// const pending = {}
// const removePending = (key, isRequest = false) => {
//   if (pending[key] && isRequest) {
//     pending[key]('取消重复请求')
//   }
//   delete pending[key]
// }
// const getRequestIdentify = (config, isReuest = false) => {
//   let url = config.url
//   if (isReuest) {
//     url = config.baseURL + config.url.substring(1, config.url.length)
//   }
//   return config.method === 'get' ? encodeURIComponent(url + JSON.stringify(config.params)) : encodeURIComponent(config.url + JSON.stringify(config.data))
// }

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 50000
})

// request拦截器
service.interceptors.request.use(
  config => {
    // const requestData = getRequestIdentify(config, true)
    // removePending(requestData)
    if (window.localStorage.token) {
      config.headers['Authorization'] = window.localStorage.getItem('token') // 让每个请求携带自定义token
    }
    config.headers['xm-request-time'] = new Date().getTime()
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response拦截器
service.interceptors.response.use(
  response => {
    // const requestData = getRequestIdentify(response.config)
    // removePending(requestData)
    // hideFullLoading() // 响应成功关闭loading
    return response
  },
  error => {
    console.log(error)
  }
)
export default service
