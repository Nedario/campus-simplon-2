/* jslint esversion:6 */

// event bus permet de faire communiquer des composants directement, sans passer par les liens parents/enfants
// il est disponible dans tous les composants de l'App.

// pour émettre un event custom =>
// this.$ebus.emit("custom-event-name", [value]);

// pour réagir à un event-custom =>
// this.$ebus.on("custom-event-name", (value) => {
  // faire quelque chose avec value ici ...
// });

import Vue from 'vue';
export const EventBus = new Vue();
