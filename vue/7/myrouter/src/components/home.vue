<template>
  <div class="hello">
    <h2>home</h2>
    <ul>
      <!-- <li v-for="(item,index) in goods" @click="handleTo(index,item)"> {{item}} -->
        <li v-for="(item,index) in goods">
        
        <!-- 动态路由 -->
        <!-- <router-link :to='{name:"details",params:{id:index,name:item}}'>{{item}}</router-link> -->
        <router-link :to='{path:"/home/details/"+index+"/"+item+"/"+price}'>{{item}}</router-link>

        <!-- <router-link :to='{path:"/home/details"}'>{{item}}</router-link> -->

        <!-- query传值 -->
        <!-- <router-link :to='{path:"/details?id="+index+"&name="+item}'>{{item}}</router-link> -->
        <!-- <router-link :to='{path:"/details",query:{id:index,name:item}}'>{{item}}</router-link> -->
      </li>
    </ul>

    <router-view></router-view>>

    <button @click="handleForWard()">前进</button>
    <button @click="handleGo()">go</button>
    <button @click="handleReplace()">替换</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      goods:[
        "香蕉",
        "苹果",
        "鸭梨"
      ],
      price:88
    }
  },
  methods: {
    handleForWard(){
      this.$router.forward();
    },
    handleTo(index,item){
      //路由跳转
      this.$router.push({
        name:"details",
        query:{id:index,name:item}
      })
    },
    handleGo(){
      this.$router.go(-1)
    },
    handleReplace(){
      this.$router.replace("/details?id=2&name=鸭梨")
    }
  },
  // beforeRouteLeave(to,from,next){
  //  let flag =  confirm("您还没有支付，确定要离开吗");
  //  if(flag){
  //    next()
  //  }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
