import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import List from "../components/list.vue";
import My from "../components/my.vue";
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
    {
      path:"**",
      component:Home
    }
  ]
})



export default router;

// beforRouterEnter  beforeRouterUpdate  beforeRouterLeave  beforeEach
