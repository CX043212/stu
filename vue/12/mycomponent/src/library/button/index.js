import ButtonCom from "./button.vue";

//创建button这个插件
ButtonCom.install = (Vue)=>{
    Vue.component(ButtonCom.name,ButtonCom)
}


export default ButtonCom;