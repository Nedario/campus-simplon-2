var td = (function() {

    var  items, panes, positions = {}, vitesse = 1000;
    // on initialise items et panes, une fois le document chargé à 100%, dans les fonctions ecouterClicks et  recupererPositions
    // positions est un objet vide pour le moment, que l'on affecte dans la fonction recupererPositions.
    // vitesse représente la vitesse de défilement du scroll en millisecondes (1000 = 1sec)

    function ecouterClicks() {
        var i;
        items = document.querySelectorAll("#nav .item");
        // on récupère tous les .item de #nav
        // on parcourt chaque li avec une boucle for
        for (i = 0; i < items.length; i += 1) {
            items[i].onclick = scroller;
            // à chaque click sur n'importe quel li, la fonction scroller est exécutée
        }
    }

    function recupererPositions() {
        var i, bounding;
        panes = document.querySelectorAll(".pane");
        // on récupère les éléments ayant la classe .pane
        // console.log(items);
        // avec log, on les affiche dans la console pour vérifier notre sélecteur (pendant les debugs)
        for (i = 0; i < panes.length; i += 1) {
            // panes[i] représente chaque pane
            // console.log(panes[i].getBoundingClientRect());
            // avec getBoundingClientRect (voir mdn), on récupère la position initiale de chaque pane
            bounding = panes[i].getBoundingClientRect();
            // on récupère donc les positions de chaque pane par rapport à la page
            positions[panes[i].id] = bounding.top;
            // puis on alimente l'objet positions avec la distance séparant chaque pane du haut de la page. Par exemple position.pane1 (ou position["pane1"] en indexation directe) représente la distance en pixels de l'élément ayant l'id pane1 du haut de page.
        }
        console.log("positions des .pane en pixels une fois la page chargée => ");
        console.log(positions);
    }

    function scroller() {
        // console.log(this); // ici, this représente le li cliqué
        var idCible, position;
        idCible = this.getAttribute("data-target");
        // cible est la div ciblée avec le data-target du li
        position = positions[idCible] - 50;
        // positions est la valeur en pixels à scroller vers l'élément cliqué moins la hauteur du header fixed...
        window.smoothScroll(position, vitesse);
        // on utilise la librairie smoothScroll pour effectuer une transition ... smooth !
    }

    window.onload = function() {
        // une fois le document chargé à 100%
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        // quel que soit la position du scroll dans la page, on réinitialise pour éviter les conflits
        recupererPositions();
        // on récupère d'abord la position de chaque pane pour gérer le soucis de scroll + header fixed...
        ecouterClicks();
        // puis on exécute la fonction ecouterClicks
    };
}());
