<template>
  <div class="main"> 
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
    <!-- <div @click="clickNum">{{ num }}</div>
    <div @click="clickNum1">{{ num1 }}</div> -->
  <!-- <div>{{ name }}</div>
    <div>{{ arr }}</div> -->
    <!-- <div>{{addNum}}</div> -->
    <div>{{list}}</div>
    <div @click="gotoAbout">跳转到about</div>
  </div>
</template>

<script>

import {defineComponent,ref,reactive,toRefs,computed,onMounted,onUnmounted} from 'vue'
import { useStore } from "vuex";
import { useRouter,useRoute } from "vue-router"

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
  //组件创建过程
  setup(props,ctx){

    onMounted(() => {
      //组件挂载过程
      //数据初始化和初始数据请求，操作dom
    })
    onUnmounted(()=>{
      //组件卸载的生命周期，跳转路由时触发
      //清除定时器，闭包函数等
    })
    let store = useStore()
    let list = computed(()=>{
      return store.state.list
    })
    //全局路由对象
    let router = useRouter()
    //当前路由对象
    let route = useRoute()
    //路由传递的参数均会转换为字符串
    console.log(route.query)
     console.log(route.params)
    let gotoAbout = () =>{  
      //push可传入带参配置对象
      //back回退到上一页
      //forward去到下一页
      //go(number)正数前进，负数后退
      router.push('/about')
    }
    // let num1 = ref(20)
    // let data = reactive({
    //   num:10,
    //   name:'jack',
    //   age:20,
    //   arr: [1,2,3]
    // })
    // //计算属性，应用如购物车总价
    // let addNum = computed(()=>{
    //   return num1.value + data.num
    // })

    // let clickNum = () => {
    //   console.log('num:'+data.num);
    // }
    // let clickNum1 = () => {
    //   console.log('num1:'+num1.value);
    // }

    return{
      list,
      gotoAbout
      // ...toRefs(data),
      // num1,
      // clickNum,
      // clickNum1,
      // addNum
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
