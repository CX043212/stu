<template>
    <div>
        <h2>homeTwo</h2>

        <h2>接收到的商品为：{{name}}-----商品的ID为---{{id}}</h2>

    </div>
</template>

<script>
export default {
    created () {
        let {id,name} = this.$route.query ;
        this.id = id;
        this.name = name; 

        
    },
    data(){
        return {
            id:"",
            name:""
        }
    },
    watch:{

        "$route"(to,from){
            let {id,name} = to.query;
            this.id = id;
            this.name = name;
        }



        
    },
    // beforeRouteUpdate(to,from,next){
    //     // let {id,name} = to.query;
    //     // this.id = id;
    //     // this.name =name;
    //     // next();
    // }
}


</script>