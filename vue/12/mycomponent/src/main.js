// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import Vuez from "./library";
Vue.use(Vuez);
Vue.use(MintUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

/*
  1、单页面开发首次加载白屏
    路由懒加载
    require
    import

  2、使用图片懒加载
    vue-lazyLoad

  3、当后端返回了大批的数据后，建议将数据在sessionStorage中保存一份  
    在加一个判断条件  如果sessionStorage中没有这个数据在向服务器进行请求


  4、函数节流
    防止高频率事件频繁触发。提高性能


*/