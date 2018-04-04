var tdClick = (function () {
    "use strict";
    var btns;

    function afficherMessage() {
        alert("hellow !");
    }

    function associerClickBtns() {
        var i;
        for (i = 0; i < btns.length; i += 1) {
            console.log(btns[i]);
            console.log(typeof btns[i]);
            btns[i].onclick = afficherMessage;
        }
    }

    function actifInactif() {
        var i, users = document.querySelectorAll(".user");

        function changerCouleur(evt) {
            console.log(evt);
            // evt est un objet représentant l'évènement click
            var user = evt.target || evt.srcElement;
            // je stocke ici l'élément html clické
            console.log(user);
            // console.log(user === this); // true
            // on aurait pu aussi y accéder avec le mot-clé this
            // this représenterait ICI la source du click, cad un user !!!
            user.classList.toggle("is-active");
        }

        for (i = 0; i < users.length; i += 1) {
            users[i].onclick = changerCouleur;
        }
    }

    window.onload = function() {
        btns = document.querySelectorAll(".btn");
        associerClickBtns();
        actifInactif();
    };

    return {
        click: afficherMessage
    };

}());
