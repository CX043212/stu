<template>
  <div id="app">
    <!-- <List-com>
      <h3 slot="a">德玛西亚</h3>
      <h3 slot="b">寒冰</h3>
      <h3 slot="c">三只松鼠</h3>

      <template scope="props">
        <div>我是带参数的插槽：{{props.val}}</div>
      </template>

    </List-com>
    

     <Banner-com>
      <template scope="props" slot="banner">//在组件内部用标签，无法接受，通过slot进行接受，
        作用域插槽，通过scope给赋予一个值接收来自banner中的imgs
        <div class="swiper-container" ref="swiperWrapper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in props.imgs">//使用
              <img :src="item">
            </div>
          </div>
          
          <div class="swiper-pagination"></div>
        </div>
      </template>
    </Banner-com>
    -->


    
    <Banner-com :imgs="imgs"></Banner-com>
  </div>
</template>



<script>
import List from "./components/list";
import Banner from "./components/Banner";

export default {
  components: {
    "List-com": List,
    "Banner-com": Banner
  },
  data(){
        return {
            imgs:[
               "https://z11.tuanimg.com/imagev2/wxyy/750x286.92192d5ae51f6c6bba1d67675ca96559.jpg",
               "https://z11.tuanimg.com/imagev2/wxyy/750x286.112e3319797eb80c49abc3e22b4d0e6e.jpg",
               "https://z11.tuanimg.com/imagev2/wxyy/750x286.dd2b88067a49e72fa6f87088e2483563.jpg"
            ]
        }
    },
 
};
</script>

<style>
</style>
