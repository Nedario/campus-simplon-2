/*jshint esversion: 6*/
var revisionsLoopsFor = (function () {
    "use strict";

    var a1, a2, a3, a4, a5, prod1, prod2, prod3;

    a1 = [1, 222, 56, 40010, 7, 8, 6, 0];
    a2 = ['bernard', "othman", "denis", "adam"];
    a3 = [400, "fegan", undefined, {}, null, true];
    prod1 = {
        color: "black",
        name: "printer 3D",
        price: 350
    };
    prod2 = {
        color: "red",
        name: "pince à téléphone",
        price: 15
    };
    prod3 = {
        color: "yellow",
        name: "chargeur mac",
        price: 0
    };
    a4 = [prod1, prod2, prod3];
    a5 = [["a", "b", "c"], ["d", "e", "f"]];


    function afficherArray(a) {
        var i;
        console.log("------");
        console.log(typeof a);
        console.log("------");
        for (i = 0; i < a.length; i += 1) {
            if (a[i].price || a[i].price === 0) {
                console.log(a[i].price);
            } else {
                console.log(a[i]);
            }
        }
    }

    // afficherArray(true);
    // afficherArray("stringstringstring");
    // afficherArray(a1);
    // afficherArray({});
    afficherArray(a4);

}());
