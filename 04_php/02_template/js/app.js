/* jshint esversion: 6 */

window.addEventListener("load", function app() {
    "use strict";
    dom.init(function(elements) {
        /* on a récupéré les éléments du DOM */
        /* ready to go ! initialisation des modules ...  */
        burger.init(elements.navbar);
        const modules = document.querySelectorAll("script[data-mod]");
        console.log();
        // var persos = persos || null;
        // persos.init(elements);
        // if (persos) {
          // console.log(persos);
          try {
            persos.init(elements);
            console.log(persos);
            console.log(burger);
          } catch(err) {
            console.log(err);
          }

        // }
        // { (cafes) ? cafes.init(elements) : null; }
        // contact.init(elements);
        //
        // const c1 = carrousel.add({
        //   target: document.getElementById("carrousel1"),
        //   height: "210",
        //   width: "320",
        //   images: [
        //     "assets/img/fractales/frac1.jpg",
        //     "assets/img/fractales/frac2.jpg",
        //     "assets/img/fractales/frac3.jpeg",
        //   ]
        // });
        //
        // const c2 = carrousel.add({
        //   target: document.getElementById("carrousel2"),
        //   height: "130",
        //   width: "130",
        //   images: [
        //     "assets/img/logos/logo-js.jpeg",
        //     "assets/img/logos/logo-html.png",
        //     "assets/img/logos/logo-css.png",
        //     "assets/img/logos/php.jpg",
        //     "assets/img/logos/logo-sql.png"
        //   ]
        // });
    });
});
