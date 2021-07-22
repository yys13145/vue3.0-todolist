<template>
  <div>
    <div>
      已完成{{isComplete}} / 全部{{all}}
    </div>
    <button class="clear" v-if="isComplete>0" @click="clear">清除已完成</button>
  </div>
</template>

<script>
import {defineComponent,ref} from 'vue'
export default defineComponent({
  name: 'navFooter',
  setup(){
    let isComplete = ref(1)
    let all = ref(3)
    let clear = () =>{
      console.log("clear!")
    }
    return{
      isComplete,
      all,
      clear
    }
  }
})
</script>

<style scoped lang="scss">
.clear{
  margin-top:6px;
}
</style>
