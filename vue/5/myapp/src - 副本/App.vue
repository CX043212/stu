<template>
  <div id="app">
    <button @click="handleClick(1)">A组件</button>
    <button @click="handleClick(2)"> B组件</button>

    <keep-alive :exclude="/^A-com$/" max=3>
      <Component :is="com"></Component>
    </keep-alive>
    <!-- 实例：读小说的时候，当翻到100页的时候，换页时，又翻回到看小说的那页时，由于缓存keep-alive的作用，还是会定位于100页的位置上 -->
    
  </div>
</template>



<script>
import A from "./components/a";
import B from "./components/b";
export default {
  components:{
    "A-com":A,
    "B-com":B,
  },
  data(){
    return{
      com:"A-com"
    }
  },
  methods:{
    handleClick(val){
      if(val == 1){
        this.com = "A-com";
      }else{
        this.com = "B-com";
      }
    }
  }
}
</script>

<style>

</style>
