<template>
  <div id="app">
      <Header-com @Toggle="handle"/>
      <TabBar-com :flag="flag"/>
  </div>
</template>

<script>
import Header from "./components/header";
import TabBar from "./components/tabBar";
export default {
    components:{
      "Header-com":Header,
      "TabBar-com":TabBar
    },
    data(){
      return {
        flag:false
      }
    },
   methods: {
      handle(){
      this.flag = !this.flag;
    }
   },
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}

a{
  text-decoration: none;
}

ul,li{
  list-style: none;
}


</style>
