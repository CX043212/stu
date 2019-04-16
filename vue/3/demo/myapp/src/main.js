//引入vue.js文件
import Vue from 'vue'
//引入App组件
import App from './App.vue       
Vue.prototype.$Observer = new Vue();//创建公共得 vue实例，将实例对象绑定在vue不同的原型身上
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })


new Vue({
  el:"#app",
  //渲染虚拟DOM
  render:function(h){
    return h(App)
  }
})

/*
  组件传值
    父->子

      1、当子组件在父组件中当做标签使用的时候，给子组件传递一个自定义属性 值为想要传递的数据
      2、在子组件中通过props进行接收,props是用来专门接收外部数据
      3、props接收的方式有2种 一种是数组 一种是对象
        区别：
          对象可以限制数据的类型

    子->父
      1、当子组件在父组件中当做标签使用的时候，如果子组件需要给父组件传递数据的时候需要在子组件中定义一个
      自定义事件 事件函数名称是不需要加()的

      2、在子组件中通过this.$emit触发自定义事件  将需要传递的参数 通过emit的第二个参数进行传递


    非父子组件传值

      通过创建公共的Vue实例对象  将实例对象绑定在Vue的原型身上即可
      传值的一方掉$emit()  接受值的一方调用$on()


      作业
        1、todolist
        2、移动端页面

*/