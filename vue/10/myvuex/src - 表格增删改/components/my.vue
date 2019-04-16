<template>
    <div>
    <label>
      姓名: <input type="text" :value = "modifyState.name" @input="handleModifyChange({type:1,e:$event})">
    </label>
    <br>
     <label>
      年龄: <input type="text" :value = "modifyState.age" @input="handleModifyChange({type:2,e:$event})">
    </label>
     <br>
     <label>
      个性签名: <input type="text" :value = "modifyState.sign" @input="handleModifyChange({type:3,e:$event})">
    </label>
     <br>
    <button @click="handleTo();handleUpdate()">修改</button>
    <button>取消</button>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
    computed: {
      ...Vuex.mapState({
        modifyState:state=>state.tab.ModifyState
      })
    },
    methods: {
       ...Vuex.mapActions({
        handleModifyChange:"tab/handleModifyChange",
        handleUpdate:"tab/handleUpdate"
      }),
      handleTo(){
        this.$router.push("/list");
      }
    }
}
</script>