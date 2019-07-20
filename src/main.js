// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
Vue.use(MintUI)
// 引入bootrap
import $ from 'jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
// 引入mui
import "./assets/dist/css/mui.min.css"
//引入js的时候要去掉严格模式
// npm install babel-plugin-transform-remove-strict-mode
// 在.bablerc文件中加入"plugins": ["transform-remove-strict-mode"]
import "./assets/dist/js/mui.min.js"
//引入mui额外的图标  像购物车什么的
import "./assets/dist/css/icons-extra.css"
import "./assets/dist/fonts/mui-icons-extra.ttf"
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
