<template>
  <div id="app">
    <Input-com/>
    <List-com/>
  </div>
</template>

<script>
import Input from "./components/input";
import List from "./components/list";

export default {
  components:{
    "Input-com":Input,
    "List-com":List
  }
}
</script>

<style>

</style>
