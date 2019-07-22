import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/tabbar/home'
import member from '@/components/tabbar/member'
import shopcar from '@/components/tabbar/shopcar'
import search from '@/components/tabbar/search'
import newsList from '@/components/news/newsList'
import newsInfo from '@/components/news/newsInfo'

Vue.use(Router)

export default new Router({
  // mode: 'history',  // 去掉路由地址的#
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component:home },
    { path: '/member', component: member },
    { path: '/shopcar', component: shopcar },
    { path: '/search', component:search},
    { path: '/home/newsList', component:newsList},
    { path: '/home/newsInfo', component:newsInfo}
  ],
  //覆盖默认的路由高亮的类，默认的类叫router-link-active
  linkActiveClass:'mui-active'
})
