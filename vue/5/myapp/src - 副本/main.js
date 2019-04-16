import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})


/*
  keep-alive  内置组件
    如果组件需要进行缓存的时候只要在需要缓存的组件标签外部加上一个内置组件keep-alive 那么这个组件就可以进入
    缓存状态

    keep-alive会使组件增加2个生命周期函数  一个是activated(活跃状态)  deactivated(缓存状态)

    keep-alive会有3个属性
      include  包含哪些组件进入缓存   
      exclude  排除哪些组件进入缓存
            值的类型:字符串 也可以是正则

      如果是正则表达式的时候需要将属性进行绑定

      max:最多可以缓存多少个组件


*/