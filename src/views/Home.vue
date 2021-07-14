<template>
  <nav-header></nav-header>
  <nav-main></nav-main>
  <nav-footer></nav-footer>
</template>

<script>

import {defineComponent} from 'vue'
 
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
    return{

    }
  }
})
</script>

<style scoped lang="scss">

</style>
