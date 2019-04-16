import Vue from 'vue'
import App from './App.vue'
import Observer from "./observer";
Vue.prototype.Observer = Observer;
import "./common/js/flexble";
import "./common/css/reset.css";
//import "../static/iconfont/iconfont.css";
new Vue({
  el: '#app',
  render: h => h(App)
})

/*
  单向数据流
    当父组件给子组件进行传递的时候，子组件不允许修改父组件的值，因为有可能父组件给其他子组件也传递
    了相关的数据，如果子组件进行了修改。可能会导致其他组件发生错误。造成错误无法捕获


  为什么组件中的data是一个函数而不是一个对象
    1、因为对象是引用类型，如果将组件进行导出后。其他组件也有可能对data进行复用
    因此是一个函数，函数每次执行完毕后都会返回一个新的对象


    动态组件
      多个组件通过一个挂载点 来显示不同的组件

      核心是一个内置组件   <Component></Component>
      挂载点  is  是Component身上的一个属性 值为组件名称

*/
