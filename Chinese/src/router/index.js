import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
/* layout */
Vue.use(Router)
//路由列表
export const constantRouterMap = [

  {
    path: '/index',
    component: _import('index'),
    hidden: true
  },
  {
    path: '*',
    redirect: '/index',
    hidden: true
  },
]
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
export const asyncRouterMap = [ //异步路由
  {
    path: '*',
    redirect: '/index',
    hidden: true
  }
]
