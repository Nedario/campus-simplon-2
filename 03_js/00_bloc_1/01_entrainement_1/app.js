// afficher des valeurs dans la console
// ------------------------------------
console.log("welcome to the blair witch project !!!");
console.log("hello world !!!");
// console.log(hello);
console.log(68 + 55);
console.log({ name: "gui", age: 23});
console.log(typeof true && false);

var titi = "toto";
var toto = "titi";
console.log(titi === toto);
console.log(titi == toto);
console.log(titi.length === toto.length);
console.log(typeof titi === typeof toto);

// en JS, nous utilisons le style camelCase
// première lettre en minuscule, chaque première lettre d'un nouveau mot en Majuscule
// ex => maVariableAuTop
// ex => maFonctionQuiDepote

function heyPeople(nom, msg) {
    console.log("hey " + nom + "!!!");

    if (msg && typeof msg === "string") {
        console.log(msg);
    }
    console.log("------------------");
}

function bonjour(user) {
    console.log("Bonjour " + user);
}

function getType(valeur){
    console.log(typeof valeur);
}

getType(true);
getType({});

bonjour("guillaume");
bonjour("bernard");

heyPeople("Farida", "comment ça roule ?");
heyPeople("Othman", 23);
