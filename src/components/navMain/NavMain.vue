<template>
  <div v-if="list.length>0">
    <div v-for="item,index in list" :key="index">
      <div class="item">
        <input type="checkbox" v-model="item.complete" />
          {{item.title}}
        <button @click="del(item,index)">删除</button>
      </div>
    </div>
  </div>
  <div v-else>
    暂无任务
  </div>
</template>

<script>
import {defineComponent,ref} from 'vue'
import { useStore } from "vuex";
export default defineComponent({
  name: 'navMain',
  props:{
    list:{
      type: Array,
      required: true
    }
  },
  setup(){
    let store = useStore()
    let del = (item,index) => {
      console.log(item,index)
      store.commit('deleteTodo',index)
    }
    return{
      del
    }
  }
})
</script>

<style scoped lang="scss">
.item{
  width: 172px;
  height: 35px;
  line-height: 35px;
  position: relative;
  button{
    position: absolute;
    right: 20px;
    top: 6px;
    display: none;
    z-index: 99;
  }
  &:hover{
    background: #ddd;
    button{
      display: block;
      cursor: pointer;
    }
  }
}
</style>
