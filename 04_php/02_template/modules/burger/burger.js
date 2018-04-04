var burger = (function burger() {
    "use strict";

    var burger, elementCible;

    function toggleCSS() {
        elementCible.classList.toggle("is-active");
        burger.classList.toggle("is-active");
        if (burger.classList.contains("is-active")) {
            burger.classList.replace("fa-bars", "fa-times");
        } else {
            burger.classList.replace("fa-times", "fa-bars");
        }
    }

    function initBurger(cible) {
        burger = document.getElementById("burger");
        elementCible = cible;
        burger.onclick = toggleCSS;
    }

    return {
        init: initBurger
    };
}());
