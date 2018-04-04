/* jshint esversion: 6*/
window.onload = function ajaxCall1() {
    "use strict";
    const btn = document.getElementById("do_ajax");
    const btnCafe = document.getElementById("get_cafe_1euro");

    function doAjax() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "api.php");

        xhr.onload = function getData(evt) {
            const res = JSON.parse(this.response);
            // console.log(res);
            const parag = `<p>${ res.fr } ou ${ res.en }</p>`;
            document.querySelector("body").innerHTML += parag;
        };

        xhr.send();
    }

    function getCafe1Euro() {
        const xhr = new XMLHttpRequest();
        const url = "https://opendata.paris.fr/api/records/1.0/search/?dataset=liste-des-cafes-a-un-euro&rows=1000&facet=arrondissement";
        xhr.open("GET", url);
        xhr.onload = function getData(evt) {
            const res = JSON.parse(this.response);
            console.log(res);
            const ul = document.createElement("ul");
            ul.className = "list cafes";
            res.records.forEach(function(cafe) {
                const li = document.createElement("li");
                li.className = "item cafe";
                li.innerHTML = `<p>${ cafe.fields.nom_du_cafe }</p>`;
                ul.appendChild(li);
            });
            document.querySelector("body").appendChild(ul);
        };
        xhr.send();
    }

    btn.onclick = doAjax;
    btnCafe.onclick = getCafe1Euro;
};
