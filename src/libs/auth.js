// 权限相关一些公共方法
import Cookie from 'js-cookie'

const tokenKey = 'platform_token'

// 设置token
export const setToken = (token) => Cookie.set(tokenKey, token, { expires: 365, path: '/' })

// 获取token
export const getToken = () => Cookie.get(tokenKey)

// 清除token
export const removeToken = () => Cookie.remove(tokenKey, { path: '/' })
