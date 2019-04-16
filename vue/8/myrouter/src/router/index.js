import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import List from "../components/list.vue";
import My from "../components/my.vue";
import HomeTwo from "../components/homeTwo.vue"
import Details from "../components/details.vue";
import Login from '../components/login.vue';
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
      path:"/home",
      component:Home,
      name:"home",
      children:[
        {
          path:"hometwo",
          component:HomeTwo,
          name:"hTwo"
        }
      ],
      meta:{
        title:"首页",
        flag:true
      }
    },{
      path:"/list",
      component:List,
      name:"list",
      meta:{
        title:"列表",
        flag:true
      }
    },
    {
      path:"/my",
      component:My,
      name:"my",
      meta:{
        title:"我的",
        flag:true
      }
    },
    // {
    //  // path:"/details/:idx/:goodsName",
    //   path:"/details",
    //   component:Details,
    //   name:"details",
    //  // props:true
    //  meta:{
    //   title:"详情",
    //   flag:false
    // }
    // },
    {
      path:"/login",
      component:Login,
      name:"login"
    },
    {
      path:"**",
      component:Home
    }
  ]
})


// router.beforeEach((to, from, next) => {
//     document.title = to.meta.title
//     next()
// })

// router.beforeEach((to, from, next) => {
//       let routers = ["home","list","my","details"];


//       if(routers.indexOf(to.name) !=-1){
            //如果true不需要验证
//          if(to.meta.flag){
//            next()
//          }else{
//            next("/login")
//          }
//       }else{
//         next();
//       }
// })



// router.beforeEach((to, from, next) => {
//      //true需要验证登陆
//       if(to.meta.flag){
//            if(store.state.token){
//              next()
//            }else{
//              next("/login")
//            }
//       }else{
//         next()
//       }
// })

export default router;

// beforRouterEnter  beforeRouterUpdate  beforeRouterLeave  beforeEach
