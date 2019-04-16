<template>
    <div>
       <div class="swiper-container" ref="swiperWrapper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in imgs">
              <img :src="item">
            </div>
          </div>
          
          <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "../../node_modules/swiper/dist/css/swiper.min.css";
export default {
    props:{
        imgs:Array
    },
    mounted() {
    new Swiper(this.$refs.swiperWrapper,{
      autoplay:true
    })
    console.log(this.$refs.swiperWrapper);
  },
}
</script>


<style>
    .swiper-container{
        width: 750px;
        height: 286px;
    }
</style>