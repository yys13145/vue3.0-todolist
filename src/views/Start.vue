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
      route.push('/home')
    }

    return {
      gotoHome
    }
  }
})
</script>
