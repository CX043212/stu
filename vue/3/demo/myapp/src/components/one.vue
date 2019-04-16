<template>
    <div class="one">
       <h1>one</h1>
       <h3>接收到父组件的值为:{{email}}</h3>
       <OneOne-com/>
    </div>
</template>

<script>
import OneOne from "./oneone";

export default {
    components:{
        "OneOne-com":OneOne
    },
    //props:["email"],
    props:{
        email:String
    },
    created () {
        console.log(this)
    }
}
</script>

<style lang="">
    .one{
        padding: 40px;
        background: blue;
    }
</style>