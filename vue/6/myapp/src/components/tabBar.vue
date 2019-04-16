<template>
    <div>
        <transition name="late">
            <List-com v-if="flag"/>
        </transition>

        <transition name="fade">
            <Mask-com v-if="flag"/>
        </transition>
       
    </div>
</template>


<script>
import Mask from "./mask";
import List from "./list";
export default {
    components:{
        "Mask-com":Mask,
        "List-com":List
    },
    props:["flag"]
}
</script>


<style lang="">

/* .mask{
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .7;
    position: absolute;
    
}

.fade-enter,.fade-leave-to{
    opacity: 0;
}

.fade-enter-active,.fade-leave-active{
    transition: all 2s linear;
} */




.late-enter,.late-leave-to{
    transform: translateX(-100%);
}

.late-enter-active,.late-leave-active{
    transition: all .3s;
}

</style>