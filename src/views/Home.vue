<template>
  <div class="main"> 
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
    <!-- <div @click="clickNum">{{ num }}</div>
    <div @click="clickNum1">{{ num1 }}</div> -->
  <!-- <div>{{ name }}</div>
    <div>{{ arr }}</div> -->
  </div>
</template>

<script>

import {defineComponent,ref,reactive,toRefs} from 'vue'
 
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
    let num1 = ref(20)
    // let name = ref('jack')
    // let arr = ref([0,1,2,3])
    let data = reactive({
      num:10,
      name:'jack',
      age:20,
      arr: [1,2,3]
    })

    let clickNum = () => {
      console.log('num:'+data.num);
    }

    let clickNum1 = () => {
      console.log('num1:'+num1.value);
    }

    return{
      ...toRefs(data),
      num1,
      clickNum,
      clickNum1
    }
  }
})
</script>

<style scoped lang="scss">
.main{
  width: 500px;
  margin: 100px auto;

}
</style>
