<template>
  <div id="app">
    <h2>App</h2>
    <One-com :email="message"/>
    <Two-com @handle="getEmail"/>
    <!-- 父组件中用自定义函数进行接受 -->
    <h2>接受到子组件的值为：{{info}}</h2>
  </div>
</template>

<script>
import One from "./components/one";
import Two from "./components/two";

export default {
  components:{
    "One-com":One,
    "Two-com":Two
  },
  data(){
    return {
      message:"我是父组件传递过来的值",
      info:""
    }
  },
  methods:{
    getEmail(val){
      this.info = val;
    }
  }
}
</script>

<style>
#app{
  padding: 50px;
  background: red;
}
</style>
