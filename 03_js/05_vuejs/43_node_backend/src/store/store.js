/*jshint esversion : 6*/
import Vue from "vue";
import Vuex from "vuex";
// modules du store
import { products } from "./products.js";
import { users } from "./users.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    users
  }
});
