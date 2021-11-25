import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 全局css
import '@/assets/css/reset.css'
// element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 路由权限控制
require('./permission')


// element注册
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
