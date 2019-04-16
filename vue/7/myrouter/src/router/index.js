import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import List from "@/components/list"
import My from "@/components/my";
import Details from "@/components/details";
import Login from "../components/login.vue";
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        flag:true,
        title:"首页"
      },
      children:[
       {
        path:"details/:id/:name/:price",
        component:Details,
        name:"details",
        //props:true
       }
      ]
    },
    {
      path: '/list',
      name: 'list',
      component: List,
      meta:{
        flag:true,
        title:"列表"
      }
    },
    {
      path: '/my',
      name: 'my',
      component: My,
      meta:{
        flag:true,
        title:"我的"
      }
    },
    // {    
    //   //path:"/details/:id/:name/:price",
    //   path:"/details",
    //   name:"details",
    //   component:Details,
    //   props:true,
    //   meta:{
    //     flag:false,
    //     title:"详情业",
    //   }
    // },
    {
      path:"/login",
      component:Login
    }
  ]
})


// router.beforeEach((to,from,next)=>{

//   //列出哪些路由需要做验证
//   var routers = ["home","list","my","details"];
  
//   //判断进入的这个路由是否是需要验证登陆的那个路由
//   if(routers.indexOf(to.name)!=-1){
//         let flag = to.meta.flag;

//         if(flag){
//           next();
//         }else{
//           next("/login")
//         }
  
//   }else{
//     next();
//   }
// })



export default router
