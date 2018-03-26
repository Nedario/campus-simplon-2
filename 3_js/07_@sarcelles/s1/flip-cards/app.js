/* jshint esversion :  6 */
const myApp = (function() {
  "use strict";

  var cards, timeout = 1000;

  function init() {
    cards = document.querySelectorAll("#board .card");
    styleCards();
  }

  function styleCards() {

    window.setTimeout(function() {
      cards.forEach(function(card) {
        card.classList.add("is-active");
      });
    }, timeout);
  }

  window.addEventListener("DOMContentLoaded", init);
}());
