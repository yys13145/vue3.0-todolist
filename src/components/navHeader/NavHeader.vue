<template>
  <input 
    placeholder="请输入任务名称" 
    v-model="value" 
    @keyup.enter="enter"
    class="header"
  />
</template>

<script>
import {defineComponent,ref} from 'vue'
export default defineComponent({
  name: 'navHeader',
  setup(props,ctx){
    let value = ref('')

    let enter = () =>{
      //通过分发把子组件的值传递给父组件
      ctx.emit('add',value.value)
      value.value = ""
    }

    return{
      value,
      enter
    }
  }
})
</script>

<style scoped lang="scss">
.header{
  margin-bottom: 10px;
}
</style>
