import Vue from 'vue'
import routes from '@/router/index'
import VueRouter from 'vue-router'

// 路由注册
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '',
    component: () => import('@/views/common/main'),
    children: [
      ...routes
    ]
  }]
})

// 解决路由push报错问题
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

export default router
