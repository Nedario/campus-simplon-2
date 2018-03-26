/* jshint esversion : 6 */

const compterEtRetourner = (clbk, timeout) => {
  var c = 0;
  const dureeTimeout = timeout || 3000; // durée du délai en millisecondes

  console.log("Valeur initiale de c => " + c); // affiche 0

  window.setTimeout(function() {
    c += 1000;
    clbk(c); // la fonction callback est exécutée avec le résultat en argument.

  }, dureeTimeout);

  // return c;
  /*
    l'instruction return est inefficace ici ...
    car setTimeout introduit de l'asynchronicité
  */
};

const foo = function (res) {
  console.log("@foo => " + res);
};

const bar = (res) => {
  console.log("@bar => " + res);
};

compterEtRetourner(foo);
compterEtRetourner(bar, 5000);
