/* jshint esversion: 6 */
const cafes = (function cafes() {
    "use strict";
    var listCafes, listElem;

    function createList() {
        listCafes.forEach(function(cafe) {
            // console.log(cafe); // chaque objet café
            const li = document.createElement("li");
            li.className = "clickable item cafe";
            li.innerHTML = `
                <h3 class="title">${cafe.fields.nom_du_cafe}</h3>
                <p>
                    ${cafe.fields.adresse},  ${cafe.fields.arrondissement}
                </p>
            `;
            li.onclick = function() {
                console.log("click");
            };
            listElem.appendChild(li);
        });
    }

    function init() {
        const btn = document.getElementById("get_cafes");
        listElem = document.getElementById("cafes_1_euros");

        if (btn)
        btn.onclick = function handleClick() {
            ajax.getData("https://opendata.paris.fr/api/records/1.0/search/?dataset=liste-des-cafes-a-un-euro&rows=10000&facet=arrondissement", function (data) {
                // console.log(data); le résultat de la requête AJAX
                listCafes = data.records; // la liste des cafés
                createList();
            });
        };
    }

    return {
        init
    };

}());
