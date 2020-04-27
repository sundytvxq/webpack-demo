import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "../components/home.vue";
import About from "../components/about.vue";

var router = new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});

export default router;
