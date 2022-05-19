import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
  },
  mutations: {
    INCREMENT_COUNT(state) {
      state.count++
    },
    REDUCE_COUNT(state){
      state.count--
    }
  },
  actions: {
    incrementCount(context){
      context.commit('INCREMENT_COUNT')
    },
    reduceCount(context){
      context.commit('REDUCE_COUNT')
    }
  },
  modules: {
  }
})
