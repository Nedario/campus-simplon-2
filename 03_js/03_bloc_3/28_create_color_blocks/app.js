/*global window, document*/
/*jshint esversion:6 */
var app = (function app() {
    "use strict";
    var btn, color, nbBlocks, blocks, actives;

    const selectionnerBlock = function selectionnerBlock() {
        this.classList.toggle("is-active");
    };

    const creerBlocks = function creerBlocks() {
        // boucler sur le nombre indiqué dans input number...
        // à chaque tour de boucle = créer un block !!!
        for (let i = 0; i < nbBlocks.value; i += 1) {
            // on créé un nouvel objet div
            let block = document.createElement("div");
            // on récupère la valeur de input color
            // et on applique cette couleur au style du block
            block.style.backgroundColor = color.value;
            block.classList.add("block");
            block.onclick = selectionnerBlock;
            // on insère le nouveau block dans la div#blocks
            blocks.appendChild(block);
        }
    };

    const updateBlocks = function updateBlocks() {
        // parcourir actives avec une boucle
        // pour chaque block (actives[i]) ....
        // changer le backgroundColor
        // en utilisant la value de l'input color
        for (let i = 0; i < actives.length; i += 1) {
            actives[i].style.backgroundColor = color.value;
        }
    };

    const start = function start() {
        btn = document.getElementById("create_blocks");
        color = document.getElementById("color_blocks");
        nbBlocks = document.getElementById("nb_blocks");
        blocks = document.getElementById("blocks");

        btn.onclick = function() {
            actives = document.querySelectorAll(".block.is-active");

            if (actives.length >= 1) {// il y'a au moins 1 block actif
                updateBlocks();
            } else {
                creerBlocks();
            }
        };
    };

    window.onload = start;
}());
