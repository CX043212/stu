//引入vue.js
import Vue from 'vue'
//引入了路由模块
import Router from 'vue-router'






//引入了helloworld模块
import Home from '@/components/home'
import Movie from "@/components/movie";
import My from "../components/my.vue";
import Details from "../components/details.vue";
import Goods from "../components/goods.vue";
import ErrorCom from "../components/error.vue";
//用Vue来使用路由中间件   |   将router挂载在vue的实例上
Vue.use(Router)

//将路由的配置项导出
export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
      path: '/home',
      name:"home",
      component: Home,
      children:[
        {
          path:"details",
          name:"details",
          component:Details,
          children:[
            {
              path:"detailsGoods",
              name:"goods",
              component:Goods
            }
          ]
        }
      ]
    },
    // {
    //   path:"/home/details/detailsGoods",
    //   component:Goods
    // },
    {
      path:"/movie",
      component:Movie
    },{
      path:"/my",
      component:My
    },
    {
      path:"**",//匹配所有
      component:ErrorCom
    }
  ]
})


/*
  路由常见的一些配置项
    路由：
      前端路由  主要用来做单页面(SPA)开发   
      后端路由  一般情况下   接口


  单页面开发&&多页面开发的优缺点？(查)


  routes:每一个路由的配置项
  mode:使用哪一种路由   1、Hash路由  路由中加#的都是hash路由   2、history路由  不带#号



  每一个路由的配置项都有哪些
    1、path:路由匹配的路径
    2、component：当路径匹配成功以后需要渲染的组件
    3、children:路由的嵌套  如果需要在一级页面嵌套二级页面的时候我们可以用children  切记在一级页面中加router-view
    4、name:命名路由
    5、redirect:重定向


  

  <router-view/>：当路由匹配成功以后渲染路由所对应的组件，只有加上这个内置组件标签以后，这个组件才能渲染到页面上
  <router-link>:实现路由的跳转   底层原理就是一个a标签  
  router-link组件身上有一个属性  to: 所跳转的路径   routerlink中的to  会与 routes中配置项的path所对应



  在Vue中如何使用插件？
    1、引入Vue  import Vue from "vue";
    2、引入插件 import 插件 from "插件"
    3、使用插件 Vue.use(插件)
  */
