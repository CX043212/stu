export default {
    handleChange({ commit }, params) {
       commit("handleChange",params)
    },
    handleModifyChange({ commit }, params){
        commit("handleModifyChange",params)
    },
    handleUpdate({commit}){
        commit("handleUpdate")
    }
}