import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/tabbar/home'
import member from '@/components/tabbar/member'
import shopcar from '@/components/tabbar/shopcar'
import search from '@/components/tabbar/search'

Vue.use(Router)

export default new Router({
  // mode: 'history',  // 去掉路由地址的#
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component:home },
    { path: '/member', component: member },
    { path: '/shopcar', component: shopcar },
    { path: '/search', component:search}
  ],
  //覆盖默认的路由高亮的类，默认的类叫router-link-active
  linkActiveClass:'mui-active'
})
