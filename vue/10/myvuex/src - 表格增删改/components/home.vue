<template>
  <div>
    <label>
      姓名: <input type="text" :value="name"  @input="handleChange({type:1,e:$event})">
    </label>
    <br>
     <label>
      年龄: <input type="text" :value="age" @input="handleChange({type:2,e:$event})">
    </label>
     <br>
     <label>
      个性签名: <input type="text" :value="sign" @input="handleChange({type:3,e:$event})">
    </label>
     <br>
    <button @click="handleAdd();handleTo()">新增</button>
    <button>取消</button>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
    computed: {
      ...Vuex.mapState({
        name:state=>state.tab.name,
        age:state=>state.tab.age,
        sign:state=>state.tab.sign
      })
    },
    methods:{
      ...Vuex.mapActions({
        handleChange:"tab/handleChange",
      }),
      ...Vuex.mapMutations({
        handleAdd:"tab/handleAdd"
      }),
      handleTo(){
        this.$router.push("/list");
      }
    }
}
</script>


<style scoped>
</style>
