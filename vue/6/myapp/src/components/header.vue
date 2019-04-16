<template>
    <div class="header">
        <a href="##" @click="handleToggle()">导航</a>
        <h3>1821</h3>
    </div>
</template>


<script>
export default {
    methods: {
        handleToggle(){
            this.$emit("Toggle");
        }
    }
}
</script>


<style lang="">
    .header{
        width: 100%;
        height: 40px;
        background: #000;
        color: #fff;
        display: flex;
        align-items: center;
    }

    .header>a{
        color: #fff;;
        display: block;
        width: 60px;
        height: 100%;
        text-align: center;
        line-height: 40px;
    }
</style>