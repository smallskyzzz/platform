import Vue from 'vue'
import App from './App.vue'
// 路由
import VueRouter from 'vue-router'
import routes from '@/router/index'
// 全局css
import '@/assets/css/reset.css'
// element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

// 解决路由push报错问题
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
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

// element注册
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
