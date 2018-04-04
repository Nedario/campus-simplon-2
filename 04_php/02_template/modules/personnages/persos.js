/* jshint esversion: 6 */

var persos = (function persos() {
    "use strict";

    var persosBackup, persosList, elements;

    function createList() {
        resetList();
        const ul = document.createElement("ul");
        ul.className = "list persos";

        persosList.forEach(function(p) {
            const li = document.createElement("li");
            li.className = "perso";
            li.innerHTML += `
                <span class="name"> ${ p.name } </span>
                <span class="genre"> ${ p.genre } </span>
            `;
            ul.appendChild(li);
        });

        elements.app.querySelector("#personnages").appendChild(ul);
    }

    function resetList() {
        const persos = document.querySelector("#personnages .persos");
        if (persos) {
            persos.remove();
        }
    }

    function init(domElems) {

        elements = domElems;

        if (elements.getDataPHP) {
          elements.getDataPHP.onclick = function handleClick() {
              ajax.getData("data.php?ajax=persos", function (data) {
                  persosBackup = data;
                  persosList = data;
                  createList();
              });
          };
        }

        if (elements.filter.persos) {
          elements.filter.persos.onkeyup = function filterPersos(evt) {

              if (!persosList) return;

              if (evt.code === "Backspace") {
                persosList = persosBackup;
              }

              const val = this.value.toLowerCase();

              if (val) {
                persosList = persosList.filter(function(p) {
                  return p.name.toLowerCase().match(val) || p.genre.toLowerCase().match(val);
                });

              } else {
                persosList = persosBackup;
              }

              createList();
          };
        }
    }

    return {
        createList: createList,
        init: init
    };

}());
