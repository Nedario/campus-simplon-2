/*jshint esversion: 6*/
const exemples = (function() {
    "use strict";
    var max = 1, products = [];

    // constructeur pour fabriquer des instances de Produits
    function Product(n, p) {
        this.name = n;
        this.price = p;
    }

    do {
        let i = products.length + 1;
        // let name = prompt("saisir nom prod " + i);
        let n = prompt("saisir nom prod " + i);
        if (!n) continue;
        let price = Number(prompt("saisir prix prod " + i));
        if (isNaN(price) || !price) continue;
        products.push(new Product(n, price));

    } while(products.length < max);

    console.log("fin do...while - products --->");
    console.log(products);
    try {
        console.log("valeur de n (let) --->");
        console.log(n); // undefined car usage de let
    } catch(err) {
        console.log(err);
    }
    // console.log(name); suprise, accessible même avec let ???

    /* CLUEDO RESULT => name avec chaîne vide dans window */

    console.log("-----------------------------");
    console.log("CLUEDO");
    console.log("name affichait empty string");
    console.log(name); // nothing, wtf ?!!
    console.log(typeof name); // string, wtf ?!!
    console.log("no comprendo ... 0_0'");
    console.log(window.name === name); // haaa..!!! ;D
    console.log("okiiii");
    console.log("-----------------------------");

}());
