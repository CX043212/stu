import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})


/*
  keep-alive  内置组件
    如果组件需要进行缓存的时候只要在需要缓存的组件标签外部加上一个内置组件keep-alive 那么这个组件就可以进入
    缓存状态

    keep-alive会使组件增加2个生命周期函数  一个是activated(活跃状态)  deactivated(缓存状态)

    keep-alive会有3个属性
      include  包含哪些组件进入缓存   
      exclude  排除哪些组件进入缓存
            值的类型:字符串 也可以是正则

      如果是正则表达式的时候需要将属性进行绑定

      max:最多可以缓存多少个组件


    slot插槽  slot是一个内置组件

      1、最基本使用
      
      当组件当做标签使用的时候,如果在组件标签内部嵌套一些标签的时候，这些元素是无法进行显示的
      如果需要进行显示的话  需要在组件内部通过slot进行接收 

      2、命名插槽
      好处：可以增加插槽的灵活性
        在组件标签内部属性书写标签的时候 给标签添加一个slot属性 值为插槽的名称  
        在组件内部通过slot进行接收  接收的同时将name属性添加到slot插槽中去  name的值为插槽的名称

      3、作用域插槽：带参数的插槽
        当组件当做标签使用的时候 如果需要将插槽中的数据使用组件内部的数据的时候 需要在组件标签内部加一个
        template标签   属性为scope  值任意值  用来接收当前组件传递过来的数据  
        使用的时候通过 属性值(props).属性(这个属性来自于组件内部绑定的属性)(val)

      <List-com>
        <template scope="props">
          <div>我是带参数的插槽：{{props.val}}</div>
        </template>
      
      </List-com>


       组件内部
       <slot :val="message"></slot>


       封装Vue组件的过程？
        1、组件的复用性
        2、组件需要暴露的API


        a、组件传值
            父传子
            子传父
            非父子
          slot插槽
          props接收




        vue动画
          1、vue中如果需要使用动画的时候需要使用一个内置组件  
          transition组件  该组件有一个name属性 值为动画的类名

          2、如果元素需要使用动画 元素/组件必须是隐藏/显示  创建、插入、移除的状态   (v-if  v-show)

          3、动画的类名分为6个

            入场动画
              <name>-enter

              <name>-enter-active

              <name>-enter-to



            出场动画
              <name>-leave

              <name>-leave-active

              <name>-leave-to

*/