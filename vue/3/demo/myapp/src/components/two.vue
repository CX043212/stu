<template>
   <div class="two">
       <h2>two</h2>
       <input type="text" v-model="message">
       <button @click="handleSend()">发送给父组件</button>
   </div>
</template>

<script>
export default {
    data(){
        return {
            message:""
        }
    },
    created() {
        this.$Observer.$on("handle",(val)=>{
            this.message = val;
        })
    },
    methods: {
        handleSend(){
            this.$emit("handle",this.message);//在子组件中定义自定义事件，通过emit进行传递
        }
    }

}
</script>

<style lang="">
    .two{
        padding: 40px;
        background: yellow;
    }
</style>