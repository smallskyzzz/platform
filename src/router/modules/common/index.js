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
    path: '/baseData',
    name: 'baseData',
    title: '基础数据',
    component: () => import(/* webpackChunkName: "home" */'@/views/baseData/index')
  },
]
