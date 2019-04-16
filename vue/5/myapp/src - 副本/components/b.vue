<template>
    <div>
        <h2>b</h2>
    </div>
</template>


<script>
export default {
     beforeCreate () {
        console.log("B组件-----beforeCreate")
    },
    created() {
         console.log("B组件-----created")
    },
    beforeMount () {
         console.log("B组件-----beforeMount")
    },
    mounted() {
         console.log("B组件-----mounted")
    },
    beforeUpdate () {
         console.log("B组件-----beforeUpdate")
    },
    updated() {
         console.log("B组件-----updated")
    },
     activated() {
        console.log("B组件-----活跃状态")
    },
    deactivated () {
        console.log("B组件-----缓存状态")
    },
    beforeDestroy () {
         console.log("B组件-----beforeDestroy")
    },
    destroyed() {
         console.log("B组件-----destroyed")
    },
}
</script>

<style lang="">
    
</style>