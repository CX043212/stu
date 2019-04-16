<template>
  <div class="hello">
    <mt-header fixed title="固定在顶部"></mt-header>
    <zhao-button text="点击" fontColor="green" color="#c33"/>
  </div>
</template>

<script>
import { Toast ,MessageBox } from 'mint-ui';
export default {
 
  created() {
    // Toast({
    //   message:"提示信息",
    //   position:"top",
    //   duration:3000
    // })

    MessageBox({
      title:"提示",
      message:"亲,您确定要离开吗",
      confirmButtonText:"离开"
    })
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
