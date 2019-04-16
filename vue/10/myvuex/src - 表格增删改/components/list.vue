<template>
    <div>
         <ul>
            <li v-for="(item,index) in list" 
                :class="activeIndex == index?'active':''"
                @click="handleActive(index)"
            >
                <p>{{item.name}}</p>
                <p>{{item.age}}</p>
                <p>{{item.sign}}</p>  
                <button @click.stop="handleModify(index);handlestateIndex(index)">修改</button>  
                <button @click.stop="handleDel(index)">删除</button>
            </li>     
        </ul>  
    </div>
</template>
<script>
import Vuex from "vuex";
export default {
   
    computed: {
        ...Vuex.mapState({
            list:state=>state.tab.list,
            activeIndex:state=>state.tab.activeIndex
        })
    },
    methods: {
        handleModify(){
            this.$router.push("/my");
        },
        ...Vuex.mapMutations({
            handlestateIndex:"tab/handlestateIndex",
            handleDel:"tab/handleDel",
            handleActive:"tab/handleActive"
        })
    },
}
</script>

<style lang="">
    .active{
        background: #ccc;
    }
</style>