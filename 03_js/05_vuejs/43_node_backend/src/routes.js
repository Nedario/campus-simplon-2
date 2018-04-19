/* jshint esversion : 6 */

// ./src/routes.js

import Vue from 'vue';
import store from "./store/store";
import VueRouter from "vue-router";
import Home from "./components/pages/Home.vue";
import Login from "./components/pages/Login.vue";
import Dashboard from "./components/pages/Dashboard.vue";
import Todo from "./components/pages/Todo.vue";

Vue.use(VueRouter);

const routes = [
  {
    component: Home,
    name: "home",
    path: "/",
  },
  {
    component: Login,
    name: "login",
    path: "/login",
    beforeEnter: (to, from, next) => {
      if (store.getters["users/current"]) {
        next(false);
      } else {
        next();
      }
    }
  },
  {
    component: Dashboard,
    name: "dashboard",
    path: "/dashboard",
    beforeEnter: (to, from, next) => {
      if (store.getters["users/current"]) {
        next();
      } else {
        next({ name: "login"});
      }
    }
  },
  {
    component: Todo,
    name: "todo",
    path: "/todo",
  },
  {
    path: "*",
    redirect: {name: "home"},
  },
];

export default new VueRouter({
  mode: "history",
  routes
});
