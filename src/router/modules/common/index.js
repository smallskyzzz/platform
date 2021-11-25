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
  },
]
