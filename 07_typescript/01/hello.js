/* jshint esversion : 6 */
console.log("hello from TS");
var myName = "gui";
var age = 23;
var aimeCoder = true;
var jenesaisquoi; // le bon vieux typage JS que tu connais
var lastname;
myName = "guillaume";
lastname = "amangoua";
age = 37;
jenesaisquoi = 42;
jenesaisquoi = "chose";
jenesaisquoi = false;
console.log(myName);
console.log(age);
console.log("aime coder ?");
console.log(aimeCoder);
console.log("jenesaisquoi ?");
console.log(jenesaisquoi);
var myHobbies = [undefined, null, "chose", 42];
var myRealHobbies = ["skate", "zik", "potes"];
console.log(myHobbies);
console.log(myRealHobbies);
// myRealHobbies.push(42); // lève une erreur de type
myRealHobbies.push("bières artisanales");
// le type tuples
var address = ["rue du pot", 100];
// address = [123, "rue de la variable"]; // lève une erreur
address = ["rue de la variable", 66];
console.log(address);
// le type enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Black"] = 33] = "Black";
    Color[Color["Orange"] = 34] = "Orange"; // 34
})(Color || (Color = {}));
var myFavoriteColor = Color.Black;
var myOtherFavoriteColor = Color.Orange;
console.log("myFavoriteColor");
console.log(myFavoriteColor);
console.log(myOtherFavoriteColor);
// myOtherFavoriteColor = "bidule"; // lève une erreur
function pipo(a) {
    return a + " c'est du pipeau !!!";
    // return 42; // gniiii .... lève une erreur !!!
}
// note pour plus tard ... ça fonctionne avec null, undefined
// à creuser ...
console.log(pipo("JS"));
var someNumbers = [1233, 34, 55, 123, 5000];
var someStrings = ["a", "b", "c", "d", "e"];
// ranger le tableau de numbers dans l'ordre croissant ; )
function sortAscNumbers(arr) {
    var sorted = arr.sort(function (a, b) {
        return a - b;
    });
    return sorted;
}
console.log(sortAscNumbers(someNumbers));
// console.log(sortAscNumbers(someStrings)); // lève une erreur
// objects
var donneesUtilisateur = {
    name: "toto",
    isAdmin: true
};
donneesUtilisateur = {
    isAdmin: true,
    name: "toto"
};
var realDonneesUtilisateur = {
    isAdmin: true,
    name: "toto"
};
/// lève une erreur
// realDonneesUtilisateur = {
//   name: true,
//   isAdmin: "toto"
// }
var complex;
complex = {
    data: ["a", "b"],
    checkIfAdmin: function (m) {
        return true || false;
    }
};
complex.checkIfAdmin("42");
var p1 = {
    ref: 12335532453,
    price: 120,
    name: "synthé roland",
    desc: "un super synthé qui fait des sons"
};
var p2 = {
    ref: 90765788928,
    price: 8000,
    name: "synthé waldorf",
    desc: "un super synthé qui fait des meilleurs sons"
};
console.log(p1);
console.log(p2);
