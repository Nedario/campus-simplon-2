/*jshint esversion : 6 */
const faireUnePromesse = () => {
  const random = Math.random();
  console.warn("en attente ... on m'a fait une promesse !");
  return new Promise((resolve, reject) => {
      // traitement asynchrone ici ...
      window.setTimeout(() => {
        if (random >= 0.5) resolve("Promesse tenue :) !");
        else reject("Promesse brisée :( !");
      }, 3000);
  });
};

faireUnePromesse().then(res => {
  console.log(res);
}).catch(err => {
  console.error(err);
});
