<template>
  <div>
    <div>
      已完成{{isComplete}} / 全部{{list.length}}
    </div>
    <button class="clear" v-if="isComplete>0" @click="clear">清除已完成</button>
  </div>
</template>

<script>
import {defineComponent,computed} from 'vue'
export default defineComponent({
  name: 'navFooter',
  props:{
    list:{
      type:Array,
      required:true
    }
  },
  setup(props,ctx){
    let isComplete = computed(()=>{
      let arr = props.list.filter(item=>{
        return item.complete
      })
      return arr.length
    })
    let clear = () =>{
      let arr = props.list.filter(item=>{
        return item.complete === false
      })
      console.log(arr)
      ctx.emit('clear',arr)
    }
    return{
      isComplete,
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
