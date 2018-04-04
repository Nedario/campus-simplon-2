(function panierConsole() {
    console.log("TP panierConsole - ready to rock !");

    var panier = [];

    function getTaillePanier() {
        return panier.length;
    }

    function ajouterProduitPanier(ref, prix, color) {
        var prod;

        if (!ref || !prix) {
            alert("mauvaise saisie");

        } else {
            prod = {
                ref: ref,
                prix: prix,
                color: color ? color : "NS"
            }

            panier.push(prod);
        }

        return prod ? prod : false;
    }

    ajouterProduitPanier("guitare", 100);
    ajouterProduitPanier("sneakers", 120, "noir");

    console.log(panier);
    console.log("articles dans le panier : " + getTaillePanier());

    ajouterProduitPanier("jean", 1.20, "gris");
    ajouterProduitPanier("stylo", 1.20, "bleu");
    ajouterProduitPanier("ketchup", 3);

    console.log("articles dans le panier : " + getTaillePanier());

    console.log(panier);
}());
