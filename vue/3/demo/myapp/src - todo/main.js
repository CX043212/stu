//引入vue.js文件
import Vue from 'vue'
//引入App组件
import App from './App.vue'

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

    子->父

    非父子组件传值

*/