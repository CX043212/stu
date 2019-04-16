import Vue from 'vue'
import App from './App.vue'
import "./animate.css";
new Vue({
  el: '#app',
  render: h => h(App)
})
/*
  动画的第二种形式 animate.css

  使用的方式
    通过将animate.css的类名赋值给某一个动画的时间段

    enter-class
    enter-active-class
    enter-to-class

    leave-class
    leave-active-class
    leave-to-class


    注意：如果需要使用animate.css的时候 切记一定要在active中调用animated这个类名



    如果需要一组元素进行动画的运行的时候需要将transition换成 transition-group  
    另外每一个子元素必须要有一个key值  这个key值必须是唯一的
*/