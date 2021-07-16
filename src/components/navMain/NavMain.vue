<template>
  <!-- <div v-for="{item,index} in list" :key="index">
    <input type="checkbox" v-model="item.complete" />
    {{item.title}}
    <button>删除</button>
  </div> -->
</template>

<script>
import {defineComponent,ref} from 'vue'
export default defineComponent({
  name: 'navMain',
  setup(){
    let list = ref([
      {
      title:'吃饭',
      complete:false
      },
      {
      title:'睡觉',
      complete:false
      },
      {
      title:'打豆豆',
      complete:true
      }
    ])

    return{
      list
    }
  }
})
</script>

<style scoped lang="scss">

</style>
