import ButtonCom from "./button";


//UI组件
const components = [
    ButtonCom
]

//进行全局引入
const install = (Vue)=>{
    components.map((component)=>{
        Vue.component(component.name,component)
    })
}


if(typeof window !=="undefined" && window.Vue){
    install(window.Vue);
}




export default {
    install
}

