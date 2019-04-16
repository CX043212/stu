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
        // let {id,name} = this.$route.query;
        // this.id = id;
        // this.name = name;
        // console.log(this.$router)

    //    let {id,name,price} = this.$route.params;
    //    this.id = id;
    //    this.name = name;
    //    this.price = price;

    //console.log(this)
    },
    //props:["id","name","price"],
    data(){
        return {
            id:"",
            name:"",
            price:""
        }
    },
    methods:{
        handleBack(){
            this.$router.back();
        }
    },
    watch:{
        "$route"(to,from){
            let {id,name,price} = to.params;
            this.id = id;
            this.name =name;
            this.price = price;    
              
        },
        "name":()=>{
            //this
        }

       
    }
    // beforeRouteUpdate(to,from,next){
    //     console.log(to,from)//

    //     let {id,name,price} = to.params;
    //     this.id = id;
    //     this.name =name;
    //     this.price = price;

    //     next();
    // }
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