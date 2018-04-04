/*jshint esversion: 6 */
window.addEventListener("DOMContentLoaded", function appVue() {
    // le dom est chargé, on peut travailler
    const app = new Vue({
      el: "#my_app",
      data: {
        // variable vide pour le moment, affecter dans la fonction getVillesDeFrance
        villesFrance: null
      },
      methods: {
        // fonction générique pour effectuer des appels ajax
        doAjax: function(url, method, clbk) {
          // instanciation de l'objet requis pour l'appel ajax
          var xhr = new XMLHttpRequest();
          // ouverture du canal de communication avec le serveur
          xhr.open(method, url);

          xhr.onload = function() {
            // on passe la réponse du serveur en argument de la fonction callback
            clbk(this.response);
          };
          // / on envoit la requête au serveur
          xhr.send();
        },
        // event handler récupérant la liste json des villes de France
        getVillesDeFrance: function(url) {
          const that = this;
          this.doAjax(url, "get", function getData(res) {
            // console.log(JSON.parse(res));
            // conversion de la réponse JSON du serveur en objet JS
            that.villesFrance = JSON.parse(res); // et affectation de la data du composant Vue
          });
        }
      }
    });
});
