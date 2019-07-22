# heima

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


错误：
引入mui.min.js的时候要去掉严格模式
 npm install babel-plugin-transform-remove-strict-mode
 在.bablerc文件中加入"plugins": ["transform-remove-strict-mode"]

安装sass
npm install sass-loader --save

npm install node-sass --save
 

 引入bootstrap

 在package.json里面加入
 "bootstrap": "^3.3.7",
 "jquery":"^2.2.1"
 然后npm install
 在到webpack.base.config.js中添加
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    })
  
  ]

  路由切换的动画代码
  .v-enter
{
    opacity: 0;
    transform: translateX(100%);
 }
 .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
 .v-enter-active,
 .v-leave-active{
  transition: all 0.5s ease;
 }

  全局配置请求数据的url
  Vue.http.options.root='http://vue.studyit.io/'
  vue-resource 前面不能带/