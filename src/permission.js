// 权限控制
import router from './router.js'
import { getToken } from '@/libs/auth'

// 路由白名单
const routerWhiteList = [
  '/login',
]

router.beforeEach((to, from, next) => {
  const token = getToken()
  console.log(token)
  if (token) {
    if (to.path === '/login') {
      next({ path: '/home' })
    }
    next()
  } else {
    if (routerWhiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
