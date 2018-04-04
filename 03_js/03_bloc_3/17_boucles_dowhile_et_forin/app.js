/*jshint esversion: 6*/
var bouclesV2 = (function () {
    "use strict";
    var chatDAulnay, delegue;

    chatDAulnay = {
        nom: "inconnu", type: "chat", couleur: "blanc et noir", couleurYeux: "vert"
    };

    delegue = {
        prenom: "Fegan", profession: "dev js", joueurDeGo: true
    };

    var n = 0;

    do {
        console.log("dans loop");
        n += 1;

    } while (n < 2);

    var collection = {
        str: "a",
        nbr: 13,
        bool: false,
        nll: null,
        und: undefined,
        f: function() {
            console.log("exec !");
        },
        arr: [1, 2, 3, 4],
        o: {name: "hello"}
    };
    console.log(collection.str);
    console.log(collection["str"]);
    console.log(collection.str === collection["str"]);
    console.log("---------------");
    for (let cle in collection) {
        console.log(cle); // affiche les props
        console.log(collection[cle]);
    }


    var lancerDoWhile = function() {
        var arr = [];

        do {
            arr.push(prompt("saisir valeur ..."));

        } while(arr.length < 5);

        console.log("fin de do...while");
        console.log("contenu du tableau ---->");
        console.log(arr);

        return arr;
    };

    var lancerForIn = function(obj) {
        var cible = document.getElementById("res_prop_objet");
        cible.innerHTML = ""; // on vide l'élément de son contenu
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                cible.innerHTML += prop + " : " + obj[prop] + '<br>';
            }
        }
        return obj;
    };
    lancerForIn(chatDAulnay);

    return {
        lancerDoWhile: lancerDoWhile,
        lancerForIn: lancerForIn,
        o1: delegue,
        o2: chatDAulnay
    };
}());
