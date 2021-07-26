import { createStore } from 'vuex'

export default createStore({
  //定义全局所需状态
  state: {
    name:'jack'
  },
  //同步修改state(方法)
  //第一个参数state,第二个参数是需要修改的值
  mutations: {
    setName(state,payload){
      state.name = payload
    }
  },
  //异步提交mutation
  //第一个参数是store对象，第二个参数是要修改的值
  actions: {
    asyncSetName(store,params){
      setTimeout(()=>{
        //commit是提交调用mutation的方法
        store.commit('setName',params)
      },2000)
    }
  },
  //模块化
  modules: {
  }
})
