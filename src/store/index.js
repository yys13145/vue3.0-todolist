import { createStore } from 'vuex'

export default createStore({
  //定义全局所需状态
  state: {
    list:[
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
    ]
  },
  //同步修改state(方法)
  //第一个参数state,第二个参数是需要修改的值
  mutations: {
    addTodo(state,data){
      state.list.push(data)
    },
    deleteTodo(state,index){
      state.list.splice(index,1)
    },
    //把过滤后的数组传过来
    clearComplete(state,arr){
      state.list = arr
    }
  },
  //异步提交mutation
  //第一个参数是store对象，第二个参数是要修改的值
  actions: {
    
  },
  //模块化
  modules: {
  }
})
