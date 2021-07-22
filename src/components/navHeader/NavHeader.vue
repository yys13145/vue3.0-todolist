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
  setup(){
    let value = ref('')

    let enter = () =>{
      console.log(value.value)
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
