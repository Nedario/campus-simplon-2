/* jshint esversion : 6 */
import Home from "./components/pages/Home.vue";
import Login from "./components/pages/Login.vue";
import Dashboard from "./components/pages/Dashboard.vue";
import Todo from "./components/pages/Todo.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/todo",
    name: "todo",
    component: Todo
  },
  {
    path: "*",
    redirect: {name: "home"},
  },
];
