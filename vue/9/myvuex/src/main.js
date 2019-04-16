// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./common/css/reset.css";
import "./common/js/flexble";
import store from "./store";
import axios from "axios";


Vue.prototype.axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


/*
        A

    B   C   D
  
  E   F    G    H




  仓库


  1、什么是vuex?
    公共状态管理


    a、并不是所有的数据都要放在Vuex中，只有各个组件公用的一些数据会放在Vuex当中

    b、Vuex是一个公共状态管理模式 并不是数据库  所以不可能持久保存一些数据  
      当用户刷新浏览器的时候那么数据就有可能消失


    c、Vuex主要应用在大型的单页面开发中

  

  2、vuex数据传递的流程
      1、通过new Vuex.Store()创建一个仓库   state是公共的状态
      2、在组件内部通过this.$store.state.属性  来调用公共状态中的state
      3、当组件需要修改数据的时候，必须遵循单向数据流。通过this.$store.dispatch来触发actions中的方法
      4、actions中的每个方法都会接受一个对象 这个对象里面有一个commit方法，用来触发mutations里面的方法
      5、mutations里面的方法用来修改state中的数据   mutations里面的方法都会接收到2个参数 一个是store中的state 
        另外一个是需要传递到参数
      6、当mutations中的方法执行完毕后state会发生改变，因为vuex的数据是响应式的  所以组件的状态也会发生改变




  3、vuex的特点

    1、遵循单向数据流


    2、Vuex中的数据是响应式的


  4、vuex中5个属性的作用

    如何使用辅助函数
      1、在当前组件中引入Vuex

      2、通过Vuex来调用辅助函数



    1、state：
      用来存储公共的状态  在state中的数据都是响应式的

      辅助函数
        mapState

        1、在computed属性中来接收state中的数据  接收方式有2种

          computed:Vuex.mapState(["属性"])

          computed:Vuex.mapState({
            key:state=>state.属性
          })


        2、如果自身组件也需要使用computed的话

          computed:{
            ...Vuex.mapState({
               key:state=>state.属性
            })
          }


    2、actions:
        actions里面的函数主要用来处理异步的函数以及一些业务逻辑,每一个函数里面都有一个形参 这个形参是一个对象
        里面有一个commit方法，这个方法用来触发mutations里面的方法
        
        辅助函数
        mapActions

        使用方式
          methods:Vuex.mapActions([""])


          methods:{
            ...Vuex.mapActions({
              key:val--->actions里面的方法名称
            })

          }

    3、mutations：
      mutations里面的函数主要用来修改state中的数据。mutations里面的所以方法都会有2个参数  一个是store中的state
      另外一个是需要传递的参数

      辅助函数
      mapMutations
             使用方式
          methods:Vuex.mapMutations([""])


          methods:{
            ...Vuex.mapMutations({
              key:val--->actions里面的方法名称
            })

          }
      

    getters:计算属性
          getters类似于组件里面computed同时也是监听属性的变化，当state中的属性发生改变的时候就会
          触发getters里面的方法。getters里面的每一个方法中都会有一个参数 state
 
          

          使用方式
            this.$store.getters.方法名称


          辅助函数

            mapGetters


            mapgetters使用在组件的computed中


            1、
              Vuex.mapGetters(["方法名称"])
              Vuex.mapGetters({
                key:val--》val就是getters中的函数名称
              })


    modules:模块
              把公共的状态按照模块进行划分

              1、每个模块都相当于一个小型的Vuex

              2、每个模块里面都会有state  getters  actions  mutations

              3、切记在导出模块的时候 加一个 namespaced:true  主要的作用是将每个模块都有独立命名空间


  安装
    yarn add vuex 


*/

