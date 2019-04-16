<template>
    <div>
        <h2>{{message}}</h2>
        <ul>
            <li v-for="(item,index) in list">{{item}}
                <button @click="handleDel(index)">删除</button>
            </li>
        </ul>

        <button @click="handleModify()">修改</button>
    </div>
</template>
<script>
export default {
    created() {
      
        message:String
    },  this.Observer.$on("handle",(val)=>{
            this.list.push(val);
        })
    },
    props:{
    data(){
        return {
            list:[]
        }
    },
    methods: {
        handleDel(index){
            this.list.splice(index,1)
        },
        handleModify(){
            this.message = "我修改了"
        }
    }
}
</script>

<style lang="">
    
</style>