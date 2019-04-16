<template>
  <div id="app">
   
    <button @click="handleClick()">点击</button>
    <!-- <transition name="fade">
        <div class="box" v-show="flag"></div>
        //元素组件必须是隐藏，显示，插入，移除的状态
    </transition> -->


    <!-- <transition name="slide">
        <div class="box" v-show="flag"></div>
    </transition> -->


     <transition name="move">
      g
    </transition>
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
    handleClick(){
      this.flag = !this.flag;
    }
  }
};
</script>

<style>
.box{
  width: 50px;
  height: 50px;
  background: red;
}

.move-enter-active,.move-leave-active{
  animation: move 5s 0s linear;
}



@keyframes move {
  0%{
    transform: translate(0,0)
  }
  25%{
    transform: translate(500px,0)
  }
  50%{
    transform: translate(500px,500px)
  }
  75%{
    transform: translate(0,500px)
  }
  100%{
    transform: translate(0,0)
  }
}

/* .rotate-enter,.rotate-leave-to{
  transform: rotate(360deg);
  opacity: 0;
}
.rotate-enter-active,.rotate-leave-active{
  transition: all 2s;
} */




/* .slide-enter,.slide-leave-to{
  height: 0;
}
.slide-enter-active,.slide-leave-active{
  transition: all 2s;
} */




/* .fade-enter,.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,.fade-leave-active{
  transition: all 2s;
} */


</style>
