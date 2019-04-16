<template>
    <div id="footer">
        <ul>
            <li v-for="(item,index) in tabBar">
                <router-link :to="item.path">
                    <i class="iconfont" v-html="item.icon"></i>
                    <span>{{item.name}}</span>
                </router-link>
                
            </li>

           
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tabBar:[
                {
                    icon:"&#xe717;",
                    name:"首页",
                    path:"/home"
                },
                {
                    icon:"&#xe61d;",
                    name:"影院",
                    path:"/list"
                },
                {
                    icon:"&#xe605;",
                    name:"我的",
                    path:"/my"
                }
                
                ]
        }
    },
    methods:{
        handleToggle(index){
            this.$emit("handleToggle",index)
        }
    }
}
</script>


<style lang="">
    #footer{
        width: 100%;
        height: .98rem;
        background: #fff;
        border-top:1px solid #868686;
        position: fixed;
        left: 0;
        bottom: 0;
    }

    #footer>ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
    #footer>ul>li,#footer>ul>li>a{
        width: 100%;
        height: 100%;
    }

   #footer>ul>li>a{
       display: flex;
       flex-direction: column;
       justify-content: space-around;
       align-items: center;
    }

     #footer>ul>li>a>i{
         display: block;
         font-size: .35rem
     }

     #footer>ul>li>a>span{
         display: block;
         font-size: .28rem
     }

     #footer>ul>li>.router-link-active{
         color:#c33;
     }
</style>