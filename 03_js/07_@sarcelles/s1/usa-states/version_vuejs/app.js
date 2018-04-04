/*jshint esversion : 6  */
const filterUSAStates = (function filterUSAStates() {
  "use strict";

  window.addEventListener("DOMContentLoaded", function(e) {

    var vueApp = new Vue({
      created() {
        this.filteredStates = this.states;
      },
      el: '#states_usa',
      data: {
        states: ["Alabama",
            "Alaska",
            "Arizona",
            "Arkansas",
            "Californie",
            "Colorado",
            "Caroline (nord)",
            "Caroline (sud)",
            "Connecticut",
            "Delaware",
            "Dakota (sud)",
            "Dakota (nord)",
            "Floride",
            "Georgie",
            "Hawai",
            "Iowa",
            "Illinois",
            "Idaho",
            "Indiana",
            "Kansas",
            "Kentucky",
            "Louisiane",
            "Maryland",
            "Montana",
            "Missouri",
            "Mississippi",
            "Michigan",
            "Massachussets",
            "Maine",
            "Maryland",
            "Minesota",
            "Nevada",
            "Nebraska",
            "New Jersey",
            "New York",
            "New Hampshire",
            "New Mexico",
            "Oklahoma",
            "Ohio",
            "Oregon",
            "Pennsylvanie",
            "Rodhe Island",
            "Tennessee",
            "Texas",
            "Utah",
            "Vermont",
            "Virginie",
            "Wisconsin",
            "Wyoming",
            "Washington",
            "West Virginia"
          ]
      },
      methods: {
        filterStates(e) {
          const vm = this;
          this.filteredStates = this.states.filter(s => {
            return s.toLowerCase().match(e.target.value.toLowerCase());
          });
          vm.$forceUpdate();
        }
      }
    });

  });

}());
