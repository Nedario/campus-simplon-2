/*jshint esversion: 6*/
/*global window, document, console*/

/** @namespace */
const app = (function () {
    "use strict";

    var values = [];

    /**
     * Observe les actions de l'user sur les éléments DOM
     * @alias app.observer
     * @return {undefined} RAS
     */
    const observer = function() {
        document.getElementById("my_btn").onclick = ajouterValeur;
        window.onkeypress = checkerKeypress;
    };

    /**
     * Ajoute une valeur au tableau local au namespace values[]
     * @alias app.ajouterValeur
     * @param {object} evt - l'évènement click
     * @return {string} la dernière valeur ajoutée OU chaîne si aucune valeur saisie par l'user
     */
    const ajouterValeur = function(evt) {
        let input = document.getElementById("my_input");
        let list = document.getElementById("my_list");
        let saisie = input.value;
        if (!saisie) return "";
        values.push(saisie);
        list.innerHTML += `<li id="item_${values.length}">${ saisie }</li>`;
        input.value = "";
        input.focus(); // on redonne le
        return saisie;
    };

    /**
     * Vérifie si la touche entrée est pressée ET que l'input #my_input a le focus. Si c'est le cas, on exécute la fonction ajouterValeur()
     * @alias app.checkerKeypress
     * @param {object} evt - l'évènement keypress
     * @return {undefined} Rien de particulier
     */
    const checkerKeypress = function(evt) {
        if (evt.keyCode === 13 && document.activeElement === document.getElementById("my_input")) {
            ajouterValeur();
        }
    };


    window.onload = observer;

}());
