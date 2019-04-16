import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import List from "../components/list";
import My from "../components/my.vue";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/home"
    },
    {
      path:"/home",
      component:Home,
      name:"home"
    },
    {
      path:"/list",
      component:List,
      name:"list"
    },
    {
      path:"/my",
      component:My,
      name:"my"
    },
    {
      path:"**",
      component:Home,
      
    }
  ]
})
