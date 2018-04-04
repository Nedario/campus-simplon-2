/*jshint esversion: 6*/
var app = (function app() {
    "use strict";
    console.log("this --->");
    console.log(this);
    var o1 = {
        type: "object",
        creation: "littérale",
        extensible: true,
        valeurInconnue: null,
        suiteDeNbres: [1, 2, 3, 4],
        sousObj: {
            imbricable: true
        },
        action: function() {
            return "exécutable via o1.action()";
        }
    };

    console.log("Un objet créé littéralement ----->>>");
    console.log(o1);
    console.log(o1.action());

    var basique = function basique() {
        return; // retourne undefined;
    };

    // appel "classique à la fonction basique"
    var b1 = basique();
    console.log("l'appel à basique() retourne ----->>>");
    console.log(b1);

    console.log("la construction de basique() retourne ----->>>");
    var b2 = new basique();
    console.log(b2);

    // on peut lier un constructeur à des actions via son prototype
    basique.prototype.direOla = function direOla() {
        console.log("ola !");
    };

    b2.direOla();


    // EXEMPLES --->
    // les constructeurs sont nommés par convention avec une majuscule
    var Animal = function Animal(co, cy, env, es, n) {
        console.log("@contructeur Animal -->");
        console.log(this);
        this.couleur = co;
        this.environnement = env;
        this.espece = es;
        this.eyeColor = cy;
        this.nom = n;
        // en mode constructeur, la fonction retourne this par défaut !
        // return this; // pas besoin de retourner le nouvel objet construit
    };

    console.log("Des objets créés via constructeurs ----->>>");
    var a1 = new Animal("rouge", "blanc", "aquatique", "poisson rouge", "bulle");
    console.log("première 'instance' de Animal ----->>>");
    // console.log(a1);
    var a2 = new Animal("noir et blanc", "jaune", "terrestre", "chat", "kitty");
    console.log("deuxième instance de Animal ----->>>");
    // console.log(a2);

    // utiliser un objet en paramètre peut facilitre l'exécution d'une fonction


    var Gateau = function Gateau(fabrication) {
        this.nappage = fabrication.nappage;
        this.nom = fabrication.nom;
        this.poids = fabrication.poids;
        this.sansGluten = fabrication.sansGluten;
        this.saveur = fabrication.saveur;
        this.tempsCuisson = fabrication.tempsCuisson;
        this.unitePoids = fabrication.poids;
    };

    var g1 = new Gateau({
        saveur: "vanille",
        unitePoids: "grammes",
        nom: "muffin",
        sansGluten: false,
        nappage: "chocolat",
        poids: 120,
        tempsCuisson: 40,
    });
    var g2 = new Gateau({
        unitePoids: "grammes",
        nom: "far aux pruneaux",
        sansGluten: true,
        nappage: "NS",
        poids: 300,
        tempsCuisson: 60,
    });

    console.log("première instance de Gateau ----->>>");
    console.log(g1);

    console.log("deuxième instance de Gateau ----->>>");
    console.log(g2);


    // noter la présence d'une majuscule en début de nom de fonction
    var Voiture = function Voiture(conf) {
        try {
            if (!(this instanceof Voiture)) {
                throw new Error("Alors comme ça on oublie le mot clé 'new' ??!!");
            }
            if (!conf) {
                throw new Error("Voiture mal configurée, vérifiez vos paramètres...");
            }
            // que se passe t'il si conf est undefined ?
            this.couleur = conf.couleur;
            this.marque = conf.marque;
            this.nom = conf.nom;
            this.prix = conf.prix;

        } catch(err) {
            console.error(err);
        }
    };

    Voiture.prototype.demarrer = function() {
        return "vroum !";
    };

    Voiture.prototype.getPositionGPS = function(clbk) {
        navigator.geolocation.getCurrentPosition(function(position) {
            return clbk(position);
        });
    };

    // var v1 = Voiture(); // plantage 1
    var v1bis = new Voiture(); // plantage 2

    console.log("si l'erreur levée par l'affectation de v1 n'est pas attrapée (catch) -> le programme plante et ce log n'est pas affiché...");
    console.log("instance de Voiture ----->>>");

    var v2 = new Voiture({
        couleur: "mat black / chrome",
        nom: "charger",
        marque: "dodge",
        prix: 99999
    });
    console.log(v2);
    console.log("on démarre ----->>>");
    console.log(v2.demarrer());


    var voirProps = function voirProps(obj) {
        var prop;
        for (prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                document.getElementById("props").innerHTML += `<li class="item">${prop} : ${obj[prop]}</li>`;
            }
        }
    };

    window.onload = function init() {

        document.getElementById("get_gps").onclick = function() {
            var gps, intrvl;
            console.log("géolocalisation .....");
            v2.getPositionGPS(function(pos) {
                console.log(pos);
            });
        };

        document.getElementById("voir_props").onclick = function() {
            voirProps(g1);
        };
    };

}());
