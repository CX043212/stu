<template>
  <div id="app">
    <router-view/>
    <Footer-com v-if="flag"/>
  </div>
</template>

<script>
import Footer from "./components/footer";
export default {
  name: 'App',
  components:{
    "Footer-com":Footer
  },
  data(){
    return{
      flag: true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
