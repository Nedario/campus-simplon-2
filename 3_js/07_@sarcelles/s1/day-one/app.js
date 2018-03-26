/*jshint esversion : 6 */

const monModule = (function monModule() {
  "use strict";

  let maVarPublique = "je suis publique, utilise moi !!!";

  function setMaVarPublique(val) {
    maVarPublique = val;
  }

  function getMaVarPublique() {
    return maVarPublique;
  }

  // @todo module / iife / return
  // @todo généreriser l'appel ajax

  function makeAJAXCall(clbk, url, method) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function getResponse(e) {
      // console.log(this.response);
      clbk(this.response);
    };
    xhr.send();
  }

  function getCafes()  {
    const url = `https://opendata.paris.fr/api/records/1.0/search/?dataset=liste-des-cafes-a-un-euro&rows=10000&facet=arrondissement`;
    const main = document.getElementById("main_content");

    function getData(res) {
     const cafes = JSON.parse(res).records; // tous les cafés
     const list = document.createElement("ul");
     list.classList.add("list-cafes");

     cafes.forEach(function(cafe) {
       // console.log(cafe); // chaque café
       const li = document.createElement("li");
       li.className = "item";
       li.textContent = cafe.fields.nom_du_cafe + " - " + cafe.fields.arrondissement;
       list.appendChild(li);
     });

     main.appendChild(list);
    }

    makeAJAXCall(getData, url, "GET");
  }

  function loadPageContent(ref) {

    function process(resServer) {
      // console.log(resServer);
      document.getElementById("main_content").innerHTML = resServer;
    }

    makeAJAXCall(process, `pages/${ref}.html`, "GET");
  }

  function handleClickHeader()  {
    console.log("le click fonctionne, yata !!!");
  }

  function handleClickItems(e) {
      const src = e.target || e.srcElement; // on teste pour compatibilité cross-browser...
      // console.log(this); // this ici est l'élément source de l'event !
      // console.log(this === src); // affiche true
      styleItem(src);
      loadPageContent(src.getAttribute("data-page"));
  }

  function styleItem(item)  {
    const prev = document.querySelector("#nav_main .item.is-active");

    if (prev && prev !== item) {
      prev.classList.remove("is-active");
    }
    item.classList.add("is-active");
  }

  function init() {
    const header = document.getElementById("header_main");
    const items = document.querySelectorAll("#nav_main .item");
    const btnCafes = document.getElementById("btn_cafes");

    for (let i = 0; i < items.length; i += 1) {
      items[i].onclick = handleClickItems;
    }

    header.onclick = handleClickHeader; // raccourci de la ligne ci-dessus
    btnCafes.onclick = getCafes; // raccourci de la ligne ci-dessus
  }

  /* l'event DOMContentLoaded sera déclenché quand la structure html
  est chargée (les balises) */
  window.addEventListener("DOMContentLoaded", init);

  /* l'event load sera déclenché quand toute la page est chargée
  (images, scripts, css compris) */
  // window.addEventListener("onload", init);

  // on construit ici une API publique pour monModule
  // tout ce qui est retourné sera accessible à l'extérieur du module
  return {
    setMaVarPublique: setMaVarPublique,
    getMaVarPublique: getMaVarPublique
  };

}());


console.log(monModule.getMaVarPublique());
monModule.setMaVarPublique("foo");
console.log(monModule.getMaVarPublique());

//
// (function foo() {
//   console.log("bar");
// }());
