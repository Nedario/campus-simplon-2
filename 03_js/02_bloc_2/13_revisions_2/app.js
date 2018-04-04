/*jshint esversion: 6*/

/* functions : elles sont utiles */

function log(d) {
    window.console.log(d);
}

function byId(id) {
    return document.getElementById(id);
}

function select(sCSS) {
    var n, nodes = document.querySelectorAll(sCSS);
    return (nodes.length) ?  nodes : nodes[0];
}


var app = (function() {
    "use strict";

    function reveal() {
        byId("tp").classList.remove("is-hidden");
    }
    window.onscroll = function(evt) {
        console.log(evt);
    };
    window.onload = function() {
        var input = document.getElementById("saisie_user");
        console.log("window load event");
        console.log(input);
        console.log("input.value ->");

        input.oninput = function() {
            console.log(input.size);
            if (input.size == 10) {
                input.size = 23;
            }
        };
        // log("after load => #title_main =>");
        // log(byId("title_main"));
        byId("action").onclick = reveal;
    };

}());
