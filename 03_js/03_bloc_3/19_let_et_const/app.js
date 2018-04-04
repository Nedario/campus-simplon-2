/*jshint esversion: 6*/
var letEtConst = (function() {
    "use strict";

    var maVar = "valeur accessible @scope > sous-scopes";
    // console.log(maVar);

    let x = 0;

    {
      let x = 1;
      {
        let x = 2;
        console.log(x); // affiche 2
      }
      console.log(x); // affiche 1
    }

    console.log(x); // affiche 0

    const direSiEstMajeur = function (age) {
        // console.log(maVar);
        let reponse = "Vous êtes";

        if (age < 18) {
            reponse += " mineur";
        } else {
            reponse += " majeur";
        }

        return reponse;
    };

    console.log(direSiEstMajeur(10));
    console.log(direSiEstMajeur(19));

    const f2 = function parcourirArray(arr) {
        // console.log(maVar);
        for (let i = 0; i < arr.length; i += 1) {
            console.log(arr[i]);
        }
        try {
            console.log(i); // undefined car hors du block for
        } catch(err) {
            console.log(err);
        }
        return arr.length;
    };
    console.log("-------------------");
    const valeur = f2([1, 2, 3, 4, 5]);
    if (valeur > 6) {
        let res = "dans le if";
    } else {
        let res = "dans le else";
        res += " , je peux changer la valeur d'un let";
        console.log(res);
    }

    console.log("-------------------");

    try {
        console.log(res);
        // affiche undefined car hors de la portée du block if/else ci dessus.
    } catch(err) {
        console.log("@catch ---->");
        console.log(err);
    }

    console.log("-------------------");

    /***** CONST ******/

    const nb = 0;
    console.log("avec les valeur autres qu'object ou array, une erreur sera levée systématiquement si on tente de réaffecter une valeur à une constante");

    try {
        nb = 1;
    } catch(err) {
        console.log(err);
    }

    console.log("-------------------");

    const arr = ["a", "b", "c", "d", "e"];
    console.log(arr);
    console.log("si on affecte un array dans une constante, on peut modifier ses valeurs ou en ajouter ...");

    arr.push("f");
    arr[arr.length - 1] = "ff";
    console.log(arr);

    try {
        console.log("en revanche on ne peut pas l'affecter à nouveau ...");
        arr = [];
    } catch(err) {
        console.log(err);
    }

    console.log("-------------------");

    const obj = {
        prop1: "choubidoo"
    };

    console.log(obj);
    obj.prop2 = "wah !";
    console.log(obj);

    try {
        obj = {};
    } catch(err) {
        console.log(err);
    }

    console.log("-------------------");
}());
