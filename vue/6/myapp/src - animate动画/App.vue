<template>
  <div id="app">
    <button @click="handleToggle()">点击</button>
    <!-- <transition 
      name=""      
      enter-class=""
      enter-active-class="animated"
      enter-to-class="flip"
      leave-class=""
      leave-active-class="animated"
      leave-to-class="bounceOutLeft"
    >
      <div class="box" v-if="flag"></div>
      
    </transition> -->


    <transition-group 
      name=""      
      enter-class=""
      enter-active-class="animated"
      <!-- 一定在active中调用这个animated这个类名  -->
      enter-to-class="flip"
      leave-class=""
      leave-active-class="animated"
      leave-to-class="bounceOutLeft"
    >
      <div class="box" v-if="flag" key="1"></div>
      <div class="box" v-if="flag" key="2"></div>
      <div class="box" v-if="flag" key="3"></div>
      <div class="box" v-if="flag" key="4"></div>
    </transition-group>
    
  </div>
</template>

<script>
export default {
    data(){
      return {
        flag:true
      }
    },
    methods: {
      handleToggle(){
        this.flag = !this.flag;
      }
    }
}
</script>

<style>
.box{
  width: 100px;
  height: 100px;
  background: red;
}

</style>
