<template>
    <div>
        <slot name="a"/>
        <slot name="c"/>
        <h2>我是list组件</h2>
        <slot name="b"/>
        

        <slot :val="message"></slot>
    </div>
</template>

<script>
export default {
    data(){
        return {
            message:"作用域插槽"
        }
    }
}
</script>


<style lang="">
    
</style>