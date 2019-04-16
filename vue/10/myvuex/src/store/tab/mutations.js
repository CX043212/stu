export default {
    handleGoods(state,params){
        state.goodsList = params;
        console.log(state);
    },
    handleToggle(state,index){
        state.goodsList[index].flag = !state.goodsList[index].flag

        var bStop = true;

       for(var i=0;i<state.goodsList.length;i++){
           if(!state.goodsList[i].flag){
               bStop = false;
               break;
           }
       }


       state.allSelected = bStop;
    },
    handleAll(state){
        state.allSelected = !state.allSelected;

        state.goodsList.map((item)=>{
            item.flag = state.allSelected;
        })
    },
    handleAdd(state,index){
        state.goodsList[index].num++;
    },
    handleReduce(state,index){
        if(state.goodsList[index].num == 1){
            state.goodsList[index].num == 1
        }else{
            state.goodsList[index].num--
        }
    }
}