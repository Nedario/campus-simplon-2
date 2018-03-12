/* jshint esversion : 6 */
import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
  // version ultra compacte es6, similaire à =>
  // render: function(h) {
  //   return h(App)
  // }
});
