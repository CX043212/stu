<template>
  <div id="app">
     <Input-com :message="todolist"/>
     <List-com :message="todolist"/>
  </div>
</template>

<script>
import List from "./components/list";
import Input from "./components/input";
export default {
  components:{
    "List-com":List,
    "Input-com":Input
  },
  data(){
    return {
      todolist:"todolist"
    }
  }
}
</script>

<style>

</style>
