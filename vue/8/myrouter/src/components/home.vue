<template>
  <div class="hello">
    <h2>home</h2>
    <router-link to="/home/hometwo">跳转二级页面</router-link>
    <router-view></router-view>

    <div class="goods">
      <div v-for="(item,index) in goods" class="goodsItem">

        <!-- <router-link :to="'/details?id='+item.id+'&name='+item.name">{{item.name}}</router-link> -->
        <router-link :to="{name:'hTwo',query:{id:item.id,name:item.name}}">{{item.name}}</router-link>


        <!-- <router-link :to="{name:'details',params:{idx:item.id,goodsName:item.name}}">{{item.name}}</router-link> -->
         <!-- <router-link :to="'/details/'+item.id+'/'+item.name">{{item.name}}</router-link> -->
        <!-- <router-link :to="{path:'/details/'+item.id+'/'+item.name}">{{item.name}}</router-link> -->
      </div>
    </div>


    <button @click="handleForward()">前进</button>
    <button @click="handlePush()">跳转</button>
    <button @click="handleReplace()">替换</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      goods:[
        {
          id:0,
          name:"三只松鼠"
        },
        {
          id:1,
          name:"旺旺牛奶"
        },
        {
          id:2,
          name:"玻璃海苔"
        }
      ]
    }
  },
  methods: {
    handleForward(){
      this.$router.forward()
    },
    handlePush(){
      this.$router.push("/my")
    },
    handleReplace(){
      this.$router.replace("/list")
    }
  },

  // beforeRouteLeave(to,from,next){
  //   let flag = confirm("您确定要离开吗？");

  //   if(flag){
  //     next()
  //   }
  // }
  // beforeRouteEnter(to,from,next){
    
  //   document.title = to.meta.title

  //   next()
  // }
}
</script>


<style scoped>
  .goodsItem{
    font-size: .5rem;
    margin:20px;
  }
</style>
