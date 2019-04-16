<template>
    <div>
        <h2>a</h2>
    </div>
</template>


<script>
export default {
    beforeCreate () {
        console.log("A组件-----beforeCreate")
    },
    created() {
         console.log("A组件-----created")
    },
    beforeMount () {
         console.log("A组件-----beforeMount")
    },
    mounted() {
         console.log("A组件-----mounted")
    },
    beforeUpdate () {
         console.log("A组件-----beforeUpdate")
    },
    updated() {
         console.log("A组件-----updated")
    },
    activated() {
        console.log("A组件-----活跃状态")
    },
    deactivated () {
        console.log("A组件-----缓存状态")
    },
    beforeDestroy () {
         console.log("A组件-----beforeDestroy")
    },
    destroyed() {
         console.log("A组件-----destroyed")
    },
}
</script>

<style lang="">
    
</style>