/*jshint esversion : 6  */
const filterUSAStates = (function filterUSAStates() {
  "use strict";
  var input, titles, listStates,
  states = ["Alabama",
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
    ];

  // ci dessous : sert à afficher/masquer les consignes de l'exercice
  function setStyle(e) {
    const src = e.target || e.srcElement;
    const target = src.nextElementSibling;
    if (target) return target.classList.toggle("is-hidden");
  }

  function filterStates() {
    setList(states.filter(s => {
      return s.toLowerCase().match(input.value.toLowerCase());
    }));
  }

  // en décomposant, filterStates réalise ces étapes ->
  // --------------------------------------------------
  // function filterStates2() {
  //   const etatsFiltres = states.filter(function(state) {
  //     const stateLow = state.toLowerCase();
  //     const valLow = input.value.toLowerCase();
  //     return stateLow.match(valLow);
  //   });
  //   setList(etatsFiltres);
  // }

  function setList(currentStates) {
    listStates.innerHTML = ""; // on remet la liste HTML à vide

    currentStates.forEach(state => { // parcours de chaque état
      // (ci-dessus : s est le paramètre du callback donné en argument de foreach)
      // s représente donc, tout à tour, chaque état
      const li = document.createElement("li"); // création d'un item de liste par état
      li.classList.add("item"); // un peu de CSS pour le style
      li.textContent = state; // on ajoute le nom de l'état courant comme node texte du li
      listStates.appendChild(li); // On insère le li comme enfant de la liste d'état
    });
  }

  function init() {
    input = document.getElementById("input_filter"); // le cahps de saisie utilisateur
    listStates = document.getElementById("list_states"); // le ol, la liste ...
    titles = document.querySelectorAll(".title"); // tous les titres (pas utile pour exo)

    setList(states); // on créé la liste complète des états au load ...

    input.oninput = filterStates; // on écoute la saisie de l'user'dans l"input
    // ci dessous : sert à afficher/masquer les consignes de l'exercice
    titles.forEach(i => {
      i.onclick = setStyle;
    });
  }
  window.addEventListener("DOMContentLoaded", init);

}());
