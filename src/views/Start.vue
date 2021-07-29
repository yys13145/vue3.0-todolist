<template>
  <div class="about">
    <button @click="gotoHome">开始任务</button>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {useRouter} from 'vue-router'

export default defineComponent({
  name: 'start',
  setup(){
    let route = useRouter()
    let gotoHome = () => {
      route.push({
        // path:"/home",
        name:"Home",
        //query传递的参数会在地址栏中显示，刷新后仍在
        query:{
          id:1,
          num:10
        },
        //跳转需要使用name别名方式，地址栏中不显示，刷新后失效
        params:{
          id:2,
          num:20
        }
      })
    }

    return {
      gotoHome
    }
  }
})
</script>
