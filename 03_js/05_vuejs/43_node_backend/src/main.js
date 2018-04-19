/* jshint esversion : 6 */
// ./src/main.js
// Dépendances et configurations principales
import Vue from 'vue';
import App from './App.vue';
import axiosConfig from "./axios.config";
import router from "./routes";
import store from "./store/store";
import { EventBus } from "./event-bus";

// FONTAWESOME
import fontawesome from "@fortawesome/fontawesome";
import regular from "@fortawesome/fontawesome-free-regular";
import brands from "@fortawesome/fontawesome-free-brands";
import solid from "@fortawesome/fontawesome-free-solid";
fontawesome.library.add(regular, brands, solid);

Vue.prototype.$ebus = EventBus;

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});

// syntaxe ES5 de render =>
// render: function(createElement) {
//   return createElement(App)
// }
