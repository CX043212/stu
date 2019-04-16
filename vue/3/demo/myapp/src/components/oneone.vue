<template>
    <div class="oneone">
       <h1>oneone</h1>
       <input type="text" v-model="message">
       <button @click="handleSend()">发送给Two组件</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            message:""
        }
    },
    methods: {
        handleSend(){
            this.$Observer.$emit("handle",this.message);//传值的一方
        }
    }
}
</script>

<style lang="">
    .oneone{
        padding: 20px;
        background:palevioletred;
    }
</style>