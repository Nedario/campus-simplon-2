/* jshint esversion : 6 */

// Dependances principales
import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import { routes } from "./routes.js";

// FONTAWESOME
import fontawesome from "@fortawesome/fontawesome";
import regular from "@fortawesome/fontawesome-free-regular";
import brands from "@fortawesome/fontawesome-free-brands";
import solid from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(regular, brands, solid);

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});


// render: function(createElement) {
//   return createElement(App)
// }
