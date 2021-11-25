export default [
  {
    path: '/baseData',
    name: 'baseData',
    title: '基础数据',
    component: () => import(/* webpackChunkName: "home" */'@/views/baseData/index')
  }
]
