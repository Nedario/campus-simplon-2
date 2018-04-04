/*jshint esversion: 6*/
var app = (function () {

    var list, selected, selectedAll;

    function lancerUneBoucleWhileInfinie() {
        return alert("NOOOOOOOO !");
        while(true) {
            // ceci est une boucle infinie car true sera TOUJOURS true !
            console.log("je tourne en bouuuucle et ne m'arrête JAMAIS !");
        }
    }

    function parcourirListeFor(sCSS) {
        var i, liste = document.querySelectorAll(sCSS);
        console.log(liste);
        // liste contient tous les nodes HTML (objets) sélectionnés

        for (i = 0; i < liste.length; i += 1) {
            // console.log(i); // numéro de la case
            // console.log(liste[i]); // contenu de la case (un objet représentant chaque li, tour à tour)

            /* technique 1 avec className => */

            // if (liste[i].className === "learn now") {
            //     console.log("ici");
            //     console.log(liste[i].textContent.length);
            // }

            /* technique 2 avec classList => */

            if (liste[i].classList.contains("now")) {
                console.log("ici aussi");
                liste[i].classList.add("parcouru");
                console.log(liste[i].textContent.length);
            }
        }
    }

    function lancerUneBoucleWhile() {
        var compteur = 1;
        while(compteur <= 1000) {
            console.log("tour de boucle n°" + compteur);
            compteur += 1;
            // synonyme de compteur++
            // synonyme de compteur = compteur + 1
        }
        console.log("##############");
        console.log("fin de boucle");
        console.log("##############");
    }

    function parcourirListeWhile() {
        var i = 0, text;

        console.log("début de boucle");
        while(i < list.children.length) {

            console.log(list.children[i]);
            text = list.children[i].textContent;

            if (text === "pause repas") {
                console.log("c'est l'heure du repas !");
                window.alert("Miam time !!! ^_^");
            }

            i += 1;
        }
        console.log("fin de boucle");
    }

    function lancerUneBoucleFor() {
        var i,
        monTableau = ['a', 'b', 'c', 'd'];

        for (i = 0; i < monTableau.length; i += 1) {
            console.log( 'itération n°' + (i + 1) + ' -> la case contient : ' + monTableau[i] );
            /* on affiche successivement le contenu de chaque case de monTableau dans la console */
        }
    }

    function selectorEtSelectorAll() {
        selected = document.querySelector(".title");
        selectedAll = document.querySelectorAll("li");
        var i = 0;
        while(i < selectedAll.length) {
            console.log(selectedAll[i]);
            i += 1;
        }
        console.log(selected);
        console.log(selectedAll);
    }

    window.onload = function() {
        console.log("doc loaded !!!");
        list = document.getElementById("todo_list");
        // console.log(list.children);
        // lancerUneBoucleWhileInfinie();
        // lancerUneBoucleWhile();
        // parcourirListeWhile();
        // selectorEtSelectorAll();
        lancerUneBoucleFor();
        parcourirListeFor(".learn");
        // parcourirListeFor("li");
        // parcourirListeFor("*");
    };

}());
