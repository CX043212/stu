<template>
    <div>
        <h2>input:{{message}}</h2>
        <input type="text" v-model="inputVal">
        <button @click="handleClick()">点击</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            inputVal:""
        }
    },
    props:{
        message:String
    },
    methods:{
        handleClick(){
          this.Observer.$emit("handle",this.inputVal);
          this.inputVal = "";  
        }
    }
}
</script>

<style lang="">
    
</style>