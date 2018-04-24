/* jshint esversion : 6 */

// ./src/routes.js

import Vue from 'vue';
import store from "./store/store";
import VueRouter from "vue-router";

import Home from "./components/pages/Home.vue";
import Login from "./components/pages/Login.vue";
import Dashboard from "./components/pages/Dashboard.vue";
import DashboardStatics from "./components/dashboard-elements/DashboardStatics.vue";
import DashboardUsers from "./components/dashboard-elements/DashboardUsers.vue";
import ProductsDashboard from "./components/products/Dashboard.vue";
import ProductsForm from "./components/products/Form.vue";
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
    },
    children: [
      {
        component: DashboardStatics,
        name: "statistics",
        path: "statistics",
      },
      {
        component: DashboardUsers,
        name: "manage-users",
        path: "manage-users",
      },
      {
        component: ProductsDashboard,
        name: "manage-products",
        path: "manage-products",
      },
      {
        component: ProductsForm,
        name: "add-product",
        path: "add-product",
      }
    ]
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
