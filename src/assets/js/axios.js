import axios from 'axios'
// import { getToken } from '@/libs/auth'

// 接口前缀地址
const baseUrl = 'https://www.fastmock.site/mock/3e7499bed00776b513dc9527a44fb4c3/'

class HttpRequest {
  // 构造方法
  constructor (autoToast = true) {
    // this.baseUrl = baseUrl
    this.autoToast = autoToast
  }

  // 默认的请求配置
  getInsideConfig (headers) {
    return {
      // baseUrl: this.baseUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '751163e173886f58bee3a1a0876f9aa01638242815675',
        'Cache-Control': 'no-cache', // 解决ie浏览器缓存
        'Pragma': 'no-cache', // 解决ie浏览器缓存
        ...(headers || {})
      }
    }
  }

  interceptors (instance, url, autoToast) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 单独处理get及delete方法，兼容参数
      if (config.method.toLowerCase() === 'get' || config.method.toLowerCase() === 'delete') {
        config.params = config.data || config.params || {}
        config.data = true
      }
      // 设置baseUrl
      config.baseURL = baseUrl
      return config
    }, err => {
      return Promise.reject(err)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      // token失效，跳转首页
      // 请求失败
      // 请求成功
      console.log(res)
    }, err => {
      return Promise.reject(err)
    })
  }

  request (options) {
    const instance = axios.create({})
    const {headers, ...requestOptions} = options
    const newOptions = Object.assign(this.getInsideConfig(headers), requestOptions)
    this.interceptors(instance, newOptions.url, this.getAutoToast(options))
    return instance(newOptions)
  }

  // 每次获取是否需要toast，防止缓存覆盖问题
  getAutoToast (options) {
    return options.autoToast ? !!options.autoToast : this.autoToast
  }
}

export default HttpRequest
