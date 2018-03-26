/* jshint esversion : 6 */
import Vue from 'vue';
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
  },
  {
    component: Dashboard,
    name: "dashboard",
    path: "/dashboard/:id",
    // beforeEnter: (to, from, next) => {
    //
    // }
  },
  {
    redirect: {name: "home"},
    path: "/dashboard",
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
