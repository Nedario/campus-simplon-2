/*jshint esversion: 6*/

var bouclesV3 = (function () {
    "use strict";

    var n = 0;

    const arr = [
        {label: "a", val: 13},
        {label: "b", val: 66},
        {label: "c", val: 100},
        {label: "d", val: 23}
    ];

    while(n < arr.length) {
        console.log(arr[n]);
        console.log(`${arr[n].label} vaut ${arr[n].val}`);
        n += 1;
    }

    console.log("-----------------");

    for (n = 0; n < arr.length; n++) {
        console.log(arr[n]);
    }

    console.log("-----------------");

    arr.forEach(function (val, i, arr) {
        console.log("tour n° " + (i + 1));
        console.log(val);
        console.log(arr);
        console.log(this);
    }, window);

    console.log("-----------------");

    function parcourirTableau(val) {
        console.log(val);
    }


    console.log("-----------------");

    arr.forEach(function (a) {
        console.log(a); // représente chaque élément parcouru !!!!
        console.log(a.label + " vaut => " + a.val);
    });

    function parcourir(a) {
        console.log(a); // représente chaque élément parcouru !!!!
        console.log(a.label + " vaut => " + a.val);
    }
    
    arr.forEach(parcourir);
}());
