<template>
    <div>
        <input type="text"  :value = "input" @input="change($event)">
        <button @click="add()">添加</button>
        <hr>
        <h3>{{n}}</h3>
        <button @click="handleAdd()">增加</button>

        <!-- <h4>{{this.$store.getters.NumN}}</h4> -->
        <h3>{{NumN}}</h3>
    </div>
</template>
<script>
import Vuex from "vuex";
export default {
    created() {
        //console.log(this)
    },
    computed:{
         ...Vuex.mapState({
            input:state=>state.todo.inputVal,
            n:state=>state.n
        }),
        ...Vuex.mapGetters({
            NumN:"NumN"
        })
       
    },

    methods:{
        ...Vuex.mapActions({
            add:"todo/handleTodoAdd",
            change:"todo/handleInput"
        }),
        ...Vuex.mapMutations({
            handleAdd:"handlMutationseAdd"
        })
    }
    // methods: {
    //     handleInput(e){
    //         let val = e.target.value;

    //         this.$store.dispatch("handleInput",val )

    //     },
    //     handleAdd(){
    //         this.$store.dispatch("handleTodoAdd")
    //     }
    // }
}
</script>