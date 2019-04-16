<template>
    <div class="nav">
        <ul>
            <li v-for="(item,index) in navs">{{item}}</li>    
        </ul>            
    </div>
</template>


<script>

export default {
    data(){
        return {
            navs:["首页","列表","详情","我的"]
        }
    }
}
</script>


<style lang="">
    .nav{
        width: 75%;
        background: #000;
        height: 100%;
        position: absolute;
        z-index: 5;
    }
    .nav>ul>li{
        height: 60px;
        line-height: 60px;
        color: #fff;
        border-bottom: 1px solid #ccc;
        padding-left: 20px;
    }
</style>