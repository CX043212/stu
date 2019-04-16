import axios from "axios";
export default {
   handleGoods({commit}){
       axios({
           method:"get",
           url:"http://localhost:3000/goods",
       })
       .then((data)=>{
           data.data.map((item)=>{
                item.flag = true
           })
           console.log(data.data)
        commit("handleGoods",data.data)
       })
   }
}