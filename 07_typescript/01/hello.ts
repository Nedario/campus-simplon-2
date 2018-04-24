/* jshint esversion : 6 */
console.log("hello from TS");

let myName: string = "gui";
let age: number = 23;
let aimeCoder: boolean = true;
let jenesaisquoi: any;// le bon vieux typage JS que tu connais
let lastname: string;

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

let myHobbies: any[] = [undefined, null, "chose", 42];
let myRealHobbies: string[] = ["skate", "zik", "potes"];

console.log(myHobbies);
console.log(myRealHobbies);
// myRealHobbies.push(42); // lève une erreur de type
myRealHobbies.push("bières artisanales");

// le type tuples
let address: [string, number] = ["rue du pot", 100];
// address = [123, "rue de la variable"]; // lève une erreur
address = ["rue de la variable", 66];
console.log(address);

// le type enum
enum Color {
  Red, // O
  Yellow, // 1
  Green, // 2
  Black = 33, // 33,
  Orange // 34
}

let myFavoriteColor: Color = Color.Black;
let myOtherFavoriteColor: Color = Color.Orange;
console.log("myFavoriteColor");
console.log(myFavoriteColor);
console.log(myOtherFavoriteColor);
// myOtherFavoriteColor = "bidule"; // lève une erreur


function pipo(a: string): string {
  return a + " c'est du pipeau !!!";
  // return 42; // gniiii .... lève une erreur !!!
}

// note pour plus tard ... ça fonctionne avec null, undefined
// à creuser ...
console.log(pipo("JS"));

let someNumbers: number[] = [1233, 34, 55, 123, 5000];
let someStrings: string[] = ["a", "b", "c", "d", "e"];


// ranger le tableau de numbers dans l'ordre croissant ; )

function sortAscNumbers(arr: number[]): number[] {
  const sorted = arr.sort((a: number, b: number): number => {
  	return a - b;
  });
  return sorted;
}

console.log(sortAscNumbers(someNumbers));
//console.log(sortAscNumbers(someStrings)); // lève une erreur


// objects


let donneesUtilisateur = {
  name: "toto",
  isAdmin: true
};

donneesUtilisateur = {
  isAdmin: true,
  name: "toto"
}

let realDonneesUtilisateur: {isAdmin: boolean, name: string} = {
  isAdmin: true,
  name: "toto"
}

/// lève une erreur
// realDonneesUtilisateur = {
//   name: true,
//   isAdmin: "toto"
// }


let complex: {data: string[], checkIfAdmin: (mail: string) => boolean};

complex = {
  data: ["a", "b"],
  checkIfAdmin: (m) => {
    return true || false;
  }
};

complex.checkIfAdmin("42");

type Product = {ref: number, price: number, name: string, desc: string};

const p1: Product = {
  ref: 12335532453,
  price: 120,
  name: "synthé roland",
  desc: "un super synthé qui fait des sons"
};

const p2: Product = {
  ref: 90765788928,
  price: 8000,
  name: "synthé waldorf",
  desc: "un super synthé qui fait des meilleurs sons"
};

console.log(p1);
console.log(p2);

// type union (ce type OU cet autre type ....)
let ageUser: number | string = 23;
ageUser = "23";
