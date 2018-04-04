/*jshint esversion: 6*/
const app = (function () {
    "use strict";
    // console.log(this); // affiche undefined (mode strict)
    // 
    const init = function() {
        // console.log(this); // affiche window (déclenche load)
        document.getElementById("my_btn").onclick = action1;
        document.getElementById("my_input").oninput = action2;
        window.onscroll = action3;
        window.onmousemove = action4;
    };

    const action1 = function(evt) {
        const source = evt.target || evt.srcElement;
        console.log(evt.type);
        console.log(evt);
        // console.log(this); // affiche l'objet #my_btn
        // console.log(this === source); // affiche true !
    };

    const action2 = function(evt) {
        const source = evt.target || evt.srcElement;
        console.log(evt.type);
        // console.log(this); // affiche l'objet #my_input
        // console.log(evt);
        console.log(this.value);
    };

    const action3 = function(evt) {
        console.log(evt.type);
        // console.log(this); // affiche window
        console.log(evt);
    };

    const action4 = function(evt) {
        console.log(evt.type);
        // console.log(evt);
    };

    window.onload = init;

}());
