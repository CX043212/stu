export default {
    state:{
        inputVal:"123",
        list:[]
    },
    mutations:{
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
    actions:{
        handleInput({commit},params){
            let val = params.target.value
             commit("handleMutationsInput",val);
         },
         handleTodoAdd({commit}){
             commit("handleTodoAdd");
         },
         handleActionsDel({commit},params){
             console.log("我是子模块")
             commit("handleMutationsDel",params)
         }
    },
    getters:{

    },
    //让自己的每一个模块都有自己独立的命名空间
     namespaced: true
}