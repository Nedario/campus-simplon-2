/*jshint esversion: 6*/
console.log("JS - Entrainement 3");
var str, nb, bool, maybeLater, unset, obj, arr;

str = "string !";
nb = 2;
bool = nb < 100;
maybeLater = null;
obj = {
    nom: "guitare",
    couleur: "orange",
    utilisateur: "Lenny Kravitz",
    type: "Fender Stratocaster",
    prix: 10000000
};
arr = [1, 3, 4, 7]; // arr.length === 4 (true)
console.log(arr[1]); // affiche le contenu de la 2ème case
console.log(obj.utilisateur); // le point est l'accesseur
// l'accesseur permet d'accéder aux propriétés d'objet
console.log(str + " est un type de données"); // concaténation
console.log("---concaténation des propriétés d'un objet ---");
console.log("La " + obj.nom + " de " + obj.utilisateur + " est une " + obj.type + " " + obj.couleur + ". Elle coûte "+ obj.prix);
console.log("---concaténation avec les litéraux de gabarit---");
console.log("(template literals (voir mdn))");
console.log(`La ${obj.nom} de ${obj.utilisateur} est une ${obj.type}``); ${obj.couleur}. Elle coûte ${obj.prix}`);
// créer une fonction ajouterAuTableau, prennant un paramètre p, et ajoutant la valeur de ce param au tableau arr. (pour simplifier p ne sera pas un objet). exécuter la fonction quelques fois et log le résultat dans la console

var ajouterAuTableau = function (p){
    arr.push(p);
    return arr;
};

var res = ajouterAuTableau(2);
console.log(arr === res);

function creerUser(n, l, a) {
    return {
        name: n,
        lastname: l,
        age: a
    };
}

var user1 = creerUser("guillaume", "amangoua", 37);
var user2 = creerUser("jerem", "ahbari", 42);
var user3 = creerUser("soufiane", "rouass", 27);

console.log(user1, user2, user3);


function comprendreScope() {
    var a = "une valeur";
    console.log(a);
    console.log(arr);

    function scopeInterne() {
        var b = "une autre valeur";
        console.log(a);
        console.log(b);
        console.log(arr);
    }
    // console.log(b); // undefined ici !!!!
    // scopeInterne();
}
comprendreScope();
// console.log(a); // undefined ici !!!!

// on y reviendra ... mais c'est UBER IMPORTANT

/*************** LES CONDITIONS */
// if
// else if
// else

var a = 100, b = 10, c = 1;


if (isNaN("450")) {
    console.log("cas 1");

} else if (!isNaN(typeof 23)) {
    console.log("cas 2");

} else {
    console.log("cas 3");
}
// la suite du prog....
