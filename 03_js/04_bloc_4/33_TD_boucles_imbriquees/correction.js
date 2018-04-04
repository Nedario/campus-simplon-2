/*jshint esversion: 6*/
/*global document, window, console*/

const exo1 = (function exo1() {
    "use strict";

    const cible = document.getElementById("exo1");

    var produits = [
        {nom: "baskets enfant", taillesDispo: [33, 34, 35, 36, 37, 38]},
        {nom: "baskets femme", taillesDispo: [36, 37, 38, 39, 40]},
        {nom: "baskets homme", taillesDispo: [39, 40, 41, 42, 43, 44, 45]},
        {nom: "baskets grandes tailles", taillesDispo: [46, 47, 48, 49, 50]},
        {nom: "baskets grandes tailles", tailleDispo: [46, 47, 48, 49, 50]},
    ];

    const parcourirProduits = function parcourirProduits() {
        for (let i = 0; i < produits.length; i += 1) {
            let div = document.createElement("div");
            let ul = document.createElement("ul");
            div.className = "produit";
            ul.className = "list";
            cible.appendChild(div);
            div.innerHTML += `<h2 class="titre">${ produits[i].nom }</h2>`;
            div.innerHTML += `<span class="desc">Tailles dispo :</span>`;
            div.appendChild(ul);

            for (let j = 0; j < produits[i].taillesDispo.length; j += 1) {
                ul.innerHTML += `<li>${produits[i].taillesDispo[j]}</li>`;
            }
        }
    };

    return parcourirProduits;

}());

const exo2 = (function exo2() {
    "use strict";

    const cible = document.getElementById("exo2");
    const nbLignes = document.getElementById("nb_lignes");
    const nbColonnes = document.getElementById("nb_colonnes");

    const insererLigne = function insererLigne() {};

    const insererColonne = function insererColonne(tr, n) {};

    const dessinerMatrice = function dessinerMatrice(lignes, colonnes) {};

    const resetMatrice = function resetMatrice() {};

    nbLignes.oninput = function modifierLignes() {};

    nbColonnes.oninput = function modifierColonnes() {};

    return dessinerMatrice;

}());

window.addEventListener("DOMContentLoaded", function init() {
  exo1();
  exo2(5, 5);
});
