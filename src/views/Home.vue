<template>
  <nav-header></nav-header>
  <nav-main></nav-main>
  <nav-footer></nav-footer>
  <div>{{ num }}</div>
  <div>{{ name }}</div>
    <div>{{ arr }}</div>
</template>

<script>

import {defineComponent,ref} from 'vue'
 
import NavFooter from '@/components/navFooter/NavFooter'
import NavHeader from '@/components/navHeader/NavHeader.vue'
import NavMain from '@/components/navMain/NavMain.vue'
export default defineComponent({

  
  name:'Home',
  //接收父组件数据
  props:{

  },
  //定义子组件
  components:{
    NavHeader,
    NavMain,
    NavFooter
  },
  setup(props,ctx){
    let num = ref(10)
    let name = ref('jack')
    let arr = ref([0,1,2,3])
    return{
      num,
      name,
      arr
    }
  }
})
</script>

<style scoped lang="scss">

</style>
