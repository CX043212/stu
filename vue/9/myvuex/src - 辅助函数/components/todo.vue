<template>
    <div>
        <ul>
            <li v-for="(item,index) in list">{{item}}
                <button @click="handleDel(index)">删除</button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        this.list = this.$store.state.list;
    },
    methods: {
        handleDel(index){
            this.$store.dispatch("handleActionsDel",index)
        }
    },
}
</script>