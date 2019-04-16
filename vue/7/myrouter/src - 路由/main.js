// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./common/css/reset.css";
import "./common/js/flexble";
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
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
    6、props:路由解耦
    7、meta:路由元信息


  

  <router-view/>：当路由匹配成功以后渲染路由所对应的组件，只有加上这个内置组件标签以后，这个组件才能渲染到页面上
  <router-link>:实现路由的跳转   底层原理就是一个a标签  
  router-link组件身上有一个属性  to: 所跳转的路径//加上冒号的话指的是对未知的量的绑定
		 
		 routerlink中的to  会与 routes中配置项的path所对应



  在Vue中如何使用插件？
    1、引入Vue  import Vue from "vue";
    2、引入插件 import 插件 from "插件"
    3、使用插件 Vue.use(插件)



  路由传参

      1、动态路由
        a、在配置路由的时候需要在路径后面加上传递参数的属性  属性前需要加:   path:"/details/:id/:name"

        b、参数的接受：在组件内部通过this.$route.params进行接收

        c、路由跳转: 通过绑定to属性 进行路由的跳转  在跳转过程中将需要传递的参数通过路由路径进行传递
          <router-link :to="{name:'',params:{}}"> <router-link>


      2、query传值
        1、不需要在路由中做配置
        2、在做路由跳转到的时候通过query的方式将参数拼接过去   ?
        3、接收this$route.query进行接收



      3、编程式导航
        this.$router.push  跳转
        this.$router.back  后退
        this.$router.forward  前进
        this.$router.go   
        this.$router.replace   替换


      4、路由解耦
        只适用于动态路由

        在路由的配置项中定义props 为true
        在接收路由参数的组件中通过props进行接收




  路由元信息

    每个路由身上所自带的一些信息




  this.$route常用的属性
    fullPath: "/details"  当前组件的路由路径
    meta: {flag: false}   元信息
    name: "details"       路由名称
    params: {}            动态路由的接收值
    path: "/details"      当前组件的路由路径
    query: {}             query传值接收值的地方






  路由守卫   路由钩子函数
    路由进入之前和离开需要做的一些验证 

    to:到哪个路由的信息
    from:从哪个路由来的一些信息
    next:接下需要执行的一些操作



    beforeRouteEnter:  注意 在当前函数中是无法获取this的指向 如果想要使用则通过next的回调使用
      1、登陆的验证
      2、热力图
      3、管理员与非管理员权限页面
      4、会员等级权限
      5、地理位置信息权限

    beforeRouteUpdate


    beforeRouteLeave
      1、用户支付
      2、答题系统
      3、用户信息保存
      4、退出登陆


  全局守卫
    beforeEach
