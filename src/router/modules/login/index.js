export default [
  {
    path: '/login',
    name: 'login',
    title: '登录',
    component: () => import(/* webpackChunkName: "login" */'@/views/login/index')
  }
]
