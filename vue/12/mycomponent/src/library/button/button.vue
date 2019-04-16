<template>
    <div class="btn" :style="{'background':color,'color':fontColor}">
        {{text}}
    </div>
</template>


<script>
export default {
        name:"zhao-button",
        props:{
            text:{
                type:String,
                default:"按钮"
            },
            color:{
                type:String,
                default:"#ccc"
            },
            fontColor:{
                type:String,
                default:"#fff"
            }   
        }
}
</script>


<style>
    .btn{
        width: 80px;
        height: 40px;
      
        border-radius: 10px;
        text-align: center;
        line-height: 40px;
    }
</style>