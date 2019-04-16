<template>
    <div>
        <h2>details</h2>

        <h3>接收到商品的名称是----{{name}}----商品的id是--{{id}}</h3>
        <!-- <h3>接收到商品的名称是----{{idx}}----商品的id是--{{goodsName}}</h3> -->


        <button @click="handleBack()">返回</button>
    </div>
</template>



<script>
export default {
    created () {
        // let {idx,goodsName} = this.$route.params;
        
        // this.id = idx;
        // this.name = goodsName;


        let {id,name} = this.$route.query;
        
        this.id = id;
        this.name = name;
    },
    // props:["idx","goodsName"],
    data(){
        return {
            id:"",
            name:""
        }
    },
    methods:{
        handleBack(){
            this.$router.back()
        }
    },
    // beforeRouteEnter(to,from,next){
    //     let flag = to.meta.flag;

    //     if(flag){
    //         next();
    //     }else{
    //         next("/login")
    //     }
    // }
}
</script>