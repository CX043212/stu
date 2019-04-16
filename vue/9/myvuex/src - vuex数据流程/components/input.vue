<template>
    <div>
        <input type="text"  :value = "this.$store.state.inputVal" @input="handleInput($event)">
        <button @click="handleAdd()">添加</button>
    </div>
</template>
<script>
export default {
    methods: {
        handleInput(e){
            let val = e.target.value;

            this.$store.dispatch("handleInput",val )

        },
        handleAdd(){
            this.$store.dispatch("handleTodoAdd")
        }
    }
}
</script>