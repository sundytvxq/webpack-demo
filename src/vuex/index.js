import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

var store = new Vuex.Store({
  state: {
    count: 0,
    price: 20,
  },
  mutations: {
    add(state, arg) {
      state.count = state.count + arg;
    },
  },
  getters: {
    sum(state) {
      return state.count * state.price + "$";
    },
  },
});
// vuex 仓库 store中的五个选项
// state 存放数据
// mutation 存放修改数据的操作
// getters 很像vue中的计算属性
// action 存放异步操作
// module 存放不同模块的数据

export default store;
