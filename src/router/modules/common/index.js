export default [
  {
    path: '',
    name: '',
    redirect: {
      name: 'home'
    },
    meta: {
      hideInMenu: true
    }
  }, {
    path: '/home',
    name: 'home',
    title: '个人中心',
    component: () => import(/* webpackChunkName: "home" */'@/views/home/index')
  }, {
    path: '/home1',
    name: 'home1',
    title: '基础数据',
    component: () => import(/* webpackChunkName: "home" */'@/views/home/index')
  },
]
