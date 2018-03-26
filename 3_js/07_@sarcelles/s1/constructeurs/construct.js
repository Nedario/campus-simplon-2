/*jshint esversion : 6 */

function Foo(p) {
  this.element = document.createElement("div"); // chaque objet instancié possède sa propre div
  this.name = p.name; // on utilise l'objet passé en argument pour hydrater notre instance de Foo
  this.lastname = p.lastname;
  this.age = p.age;

  // il faut attendre le load de la page pour insérer la div créé dans le document
  window.addEventListener("DOMContentLoaded", function() {
    document.querySelector("body").appendChild(this.element); // this ici représente donc bien le constructeur Foo
  }.bind(this)); // on bind pour garder la référence au construct
}

Foo.prototype.afficherPresentation = function () {
  this.element.textContent = this.sePresenter();
};

Foo.prototype.sePresenter = function () {
  return `Je m'appelle ${this.name} ${this.lastname} et j'ai ${this.age} ans`;
};

const gui = new Foo({
  lastname: "Begood",
  name: "Johnny",
  age: 37
});

const billy = new Foo({
  lastname: "Jean",
  name: "Billy",
  age: 67
});

gui.afficherPresentation();
console.log(gui.sePresenter());
console.log(billy.sePresenter());
