<template>
    <div class="top">
       <label class="allSeleted">
            <input type="checkbox" :checked="all" @click="handleAll()"/>
            <span>全选</span>
       </label>
       <div class="goodsInfo">商品</div>
       <div class="price">单价</div>
       <div class="num">数量</div>
       <div class="sum">小计</div>
       <div class="handle">操作</div>
    </div>
</template>


<script>
import Vuex from "vuex";
export default {
    computed: {
        ...Vuex.mapState({
            all:state=>state.tab.allSelected
        })
    },
    methods: {
        ...Vuex.mapMutations({
            handleAll:"tab/handleAll"
        })
    }

}
</script>


<style lang="">
    .top{
        width: 100%;
        height: 40px;
        background: #ccc;
        display: flex;
        align-items: center;
    }

    .top>.allSeleted{
        display: flex;
        margin-right: 40px;
    }
    .top>.goodsInfo{
        width: 300px;
       
    }

    .top>.price{
        width: 100px;
       
    }

    .top>.num{
        width: 180px;
       
    }
     .top>.sum{
        width: 100px;
       
     }
     .top>.handle{
         width: 100px;

     }
</style>