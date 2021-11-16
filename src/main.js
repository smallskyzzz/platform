import Vue from 'vue'
import App from './App.vue'
// 路由
import VueRouter from 'vue-router'
import routes from '@/router/index'

// 路由注册
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
