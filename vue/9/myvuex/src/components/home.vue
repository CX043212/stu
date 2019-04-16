<template>
  <div class="hello">
    <h2>home</h2>
    <h3>{{this.$store.state.n}}</h3>
    <button @click="handleClick()">修改</button>

    <hr>
    <Input-com/>
    <Todo-com/>

  </div>
</template>

<script>
import Todo from "./todo";
import Input from "./input";
export default {
  components: {
      "Todo-com":Todo,
      "Input-com":Input
  },
    created() {
     
      this.axios({
        method:"patch",
        url:"http://localhost:3000/data/4",
        data:{
          name:"张三222222",
        }
      })
      .then((data)=>{
        console.log(data)
      })
    },
    methods: {
      handleClick(){
        this.$store.dispatch("handleAdd");
      }
    }
}
</script>


<style scoped>
</style>
