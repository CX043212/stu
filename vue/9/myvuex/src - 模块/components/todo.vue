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
import Vuex from "vuex";
export default {
    computed:{
        ...Vuex.mapState({
            list:state=>state.todo.list
        })
    },  

    methods:{
        ...Vuex.mapActions({
            handleDel:"todo/handleActionsDel"
        })
    }
    
    // methods: {
    //     handleDel(index){
    //         this.$store.dispatch("handleActionsDel",index)
    //     }
    // },
}
</script>