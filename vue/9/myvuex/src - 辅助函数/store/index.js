import Vue from "vue";
import Vuex from "vuex";
import todo from "./todo";
Vue.use(Vuex);

//创建公共的仓库
const store = new Vuex.Store({
    //存储数据
    state:{
        n:10,
        inputVal:"123",
        list:[]
    },
    //相当于computed
    getters:{
        NumN(state){
            
            return "n发生了变化，值为:"+state.n
        }
    },
    //处理异步函数以及业务逻辑  里面的参数都是函数
    actions:{
        handleAdd({commit}){
            console.log("被调用了")
            commit("handlMutationseAdd",101111)
        },
        handleInput({commit},params){
           let val = params.target.value
            commit("handleMutationsInput",val);
        },
        handleTodoAdd({commit}){
            commit("handleTodoAdd");
        },
        handleActionsDel({commit},params){
            commit("handleMutationsDel",params)
        }
    },
    //转们用来修改state中的数据  mutations里面的方法触发的时候只能通过commit进行触发
    mutations:{
        handlMutationseAdd(state,params){
            console.log("mutations被调用了",params)

            state.n++;
            console.log(state.n);
        },
        handleMutationsInput(state,params){
            state.inputVal = params;
        },
        handleTodoAdd(state){
            state.list.push(state.inputVal);
            state.inputVal = "";
        },
        handleMutationsDel(state,params){
            state.list.splice(params,1)
        }
    },
    modules:{
        todo
    }
})



export default store;