/*jshint esversion: 6*/
var manipDom = (function () {
    "use strict";

    const init = function init() {

        const body = document.querySelector("body");

        console.log(body.children);
        // affiche tous les enfants de body
        console.log(body.children[0]);
        console.log(body.children[body.children.length - 1]);
        console.log(body.parentElement);
        // affiche HTML
        console.log(body.previousElementSibling);
        // affiche head
        console.log(body.nextElementSibling);
        // affiche null ...
        console.log(body.children[0].nextElementSibling);
        // affiche le premier paragraphe
    };

    window.addEventListener("DOMContentLoaded", init);

    // window.addEventListener("load", init);
    // window.onload = init;

}());
