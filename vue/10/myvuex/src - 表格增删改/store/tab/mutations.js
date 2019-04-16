export default {
    //双数据绑定  数据修改
    handleChange(state, params) {
        switch (params.type) {
            case 1:
                state.name = params.e.target.value;
                break;
            case 2:
                state.age = params.e.target.value;
                break;
            case 3:
                state.sign = params.e.target.value;
                break;
        }

        
    },
    handleModifyChange(state,params){
        switch (params.type) {
            case 1:
                state.ModifyState.name = params.e.target.value;
                break;
            case 2:
                state.ModifyState.age = params.e.target.value;
                break;
            case 3:
                state.ModifyState.sign = params.e.target.value;
                break;
        }

       

    },
    handleAdd(state){
        let obj = {};
        obj.name = state.name;
        obj.age = state.age;
        obj.sign = state.sign;

        state.list.push(obj);

        state.name = "";
        state.age = "";
        state.sign = "";
       

    },
    handlestateIndex(state,index){
        state.ModifyIndex = index;

        var obj = state.list[index];

        state.ModifyState.name = obj.name;
        state.ModifyState.age = obj.age;
        state.ModifyState.sign = obj.sign;

    },
    handleUpdate(state){
        
        state.list.splice(state.ModifyIndex,1,state.ModifyState);
        state.ModifyIndex = -1;
    },
    handleDel(state,index){
        state.list.splice(index,1);

        var index = state.list.indexOf(state.activeObj);
        state.activeIndex = index;
    },
    //active
    handleActive(state,index){
        state.activeIndex = index;

        var obj = state.list[index];
        //保留选中的对象
        state.activeObj = obj;
    }
}