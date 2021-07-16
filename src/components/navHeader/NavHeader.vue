<template>
  <input placeholder="请输入任务名称" v-model="value" />
</template>

<script>
import {defineComponent,ref} from 'vue'
export default defineComponent({
  name: 'navHeader',
  setup(){
    let value = ref('')
    return{
      value
    }
  }
})
</script>

<style scoped lang="scss">

</style>
