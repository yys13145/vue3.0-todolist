<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="back">返回</button>
  </div>
</template>

<script>
import {defineComponent,ref} from 'vue'
import {useRouter} from 'vue-router'

export default defineComponent({
  name: 'about',
  setup(){
    let route = useRouter()
    let back = () => {
      route.go(-1)
    }

    return {
      back
    }
  }
})
</script>
