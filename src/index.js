import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import axios from "axios";
Vue.prototype.axios = axios;
// 把axios方法挂载到Vue原型上，就可以被所有的vue实例（组件）所使用
axios.defaults.baseURL = "http://jsonplaceholder.typicode.com";

import store from "./vuex";

var vm = new Vue({
  el: "#app",
  render: function(c) {
    return c(App);
  },
  router,
  store,
});
