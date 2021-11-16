export default [
  {
    path: '/home',
    name: 'home',
    title: '首页',
    component: () => import(/* webpackChunkName: "home" */'@/views/home/index')
  },
]
