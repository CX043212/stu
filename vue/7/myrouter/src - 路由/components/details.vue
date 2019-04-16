<template>
    <div>
        <h2>详情页</h2>
        <h3>当前商品的名称是:{{name}}------商品的id是：{{id}}-----价格：{{price}}</h3>


        <button @click="handleBack()">返回</button>
    </div>
</template>

<script>
export default {
    created() {
        //console.log(this.$route)
        // let {id,name} = this.$route.query;//query传参
        // this.id = id;
        // this.name = name;
        // console.log(this.$router)

    //    let {id,name} = this.$route.params;//动态路由
    //    this.id = id;
    //    this.name = name;
    },
    props:["id","name","price"],//编程式导航
    data(){
        return {
            // id:"",
            // name:""
        }
    },
    methods:{
        handleBack(){
            this.$router.back();
        }
    },
    // beforeRouteEnter(to,from,next){
    //     console.log(to,from,this)
    //     document.title = to.meta.title;
    //     next((vm)=>{
    //         console.log(vm);
    //     });
    // }
}
</script>


<style lang="">
    
</style>