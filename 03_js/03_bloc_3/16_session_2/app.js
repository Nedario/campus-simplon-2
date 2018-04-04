/*jshint esversion: 6*/
var session2 = (function () {
    "use strict";

    var users = [];

    /********** Préambule - TD Constructeurs **********/

    var Synthetiseur = function(s) {
        this.anneeSortie = s.anneeSortie;
        this.imgUrl = s.imgUrl;
        this.marque = s.marque;
        this.modele = s.modele;
        this.prix = s.prix;
    };

    Synthetiseur.prototype.toString = function() {
        return `ce synthé ${this.modele} de marque ${this.marque} est sorti en ${this.anneeSortie} et coûte actuellement ${this.prix} sur le marché de l'occasion`;
    };

    Synthetiseur.prototype.setPrix = function(p) {
        this.prix = p;
        return p;
    };

    var moog = new Synthetiseur({
        marque: "Moog",
        modele: "Mini-Moog",
        prix: 3500,
        anneeSortie: 1975,
        imgUrl: "http://www.vintagesynth.com/sites/default/files/2017-05/moog_voyager_old_school_lg.jpg"
    });

    var nova = new Synthetiseur({
        marque: "Novation",
        modele: "Supernova",
        prix: 800,
        anneeSortie: 2000,
        imgUrl: "https://medias.audiofanzine.com/images/normal/novation-supernova-iir-8472.jpg"
    });

    (function afficherInfosSynthe() {
        console.log(moog);
        console.log(moog.toString());
        console.log("-----------");
        console.log(nova);
        console.log(nova.toString());
        console.log("-----modification du prix de supernova ------");
        console.log(nova.setPrix(200));
        console.log(nova.toString());
    }());

    /********** JS - SESSION 2 **********/

    var inverserCouleur = function(c) {
        var autre = document.getElementById(c.id === "red" ? "green" : "red");
        var autreCouleur = autre.style.backgroundColor;
        autre.style.backgroundColor = c.style.backgroundColor;
        c.style.backgroundColor = autreCouleur;
    };

    var inverserCouleur2 = function(c) {
        var autre;

        if (c.id === "green") {
            autre = document.getElementById("red");
        } else {
            autre = document.getElementById("green");
        }

        if (c.style.backgroundColor === "red") {
            c.style.backgroundColor = "green";
            autre.style.backgroundColor = "red";
        } else {
            c.style.backgroundColor = "red";
            autre.style.backgroundColor = "green";
        }
    };

    var inverserCouleur3 = function() {
        var i, carres = document.querySelectorAll(".carre");
        for (i = 0; i < carres.length; i += 1) {
            carres[i].classList.toggle("rouge");
            carres[i].classList.toggle("vert");
        }
    };

    var inverserLettres = function(str) {
        var i, tmp = "";
        for (i = str.length - 1; i >= 0; i -= 1) {
            // tmp += str[i];
            tmp += str[i] === " " ? '' : str[i];
        }
        return tmp;
    };

    var inverserLettres2 = function(str) {
        return str.replace(/ /g, '').split('').reverse().join('');
    };

    var dessinerColones = function(nbCols) {
        var i, cols = "|"; // 2
        for (i = 0; i < nbCols; i += 1) {
            cols += ` ${i} |`;
            // cols += i + " |";
        }
        return cols;
    };

    var dessinerLignes = function(nbLignes, nbCols) {
        var i, lignes = "";
        for (i = 0; i < nbLignes; i += 1) {
            lignes += dessinerColones(nbCols) + '\n';
        }
        return lignes;
    };

    var estPalindrome = function(a, b) {
        return a === b;
    };

    var User = function(n, a) {
        this.name = n;
        this.age = a;
    };

    User.prototype.sayHello = function(user) {
        console.log("Hello " + user.name);
    };

    var saisirInfosUser = function(n) {
        var age, name, nameOk = false, ageOk = false;

        do {
            name = window.prompt("saisir nom user" + (n + 1));
            nameOk = isNaN(name) && name.length >= 4;

        } while(!nameOk);

        do {
            age = window.prompt("saisir age user" + (n + 1));
            ageOk = isFinite(age) && age > 0 && age < 130;

        } while(!ageOk);

        return new User(name, age);
    };

    var remplirTableauUsers = function(n) {
        var i;
        for (i = 0; i < n; i += 1) {
            users.push(saisirInfosUser(i));
        }
        return users;
    };

    var saluerUsers = function(users) {
        var i;
        for (i = 0; i < users.length; i += 1) {
            if (i > 0) {
                users[i].sayHello(users[i - 1]);
            }
        }
    };

    window.onload = function() {

        document.getElementById("saisie_user").oninput = function() {
            var invers1 = inverserLettres(this.value);
            var invers2 = inverserLettres2(this.value);
            var res;
            if (estPalindrome(this.value, invers2)) {
                res = "cette chaîne est palindrome";
            } else {
                res = "cette chaîne n'est pas palindrome";
            }
            document.getElementById("res_saisie").textContent = invers2;
            document.getElementById("res_palindrome").textContent = res;
        };

        document.getElementById("creer_lignes").onclick = function() {
            var str = dessinerLignes(
                Number(document.getElementById("nb_lignes").value),
                Number(document.getElementById("nb_cols").value)
            );
            document.getElementById("res_exo3").textContent += str;
            console.log(str);
        };

        document.getElementById("creer_users").onclick = function() {
            remplirTableauUsers(
                Number(document.getElementById("nb_users").value)
            );
        };

        document.getElementById("hello_users").onclick = function() {
            if (!users || users.length < 2) {
                alert("pas assez d'users à saluer");
            } else {
                saluerUsers(users);
            }
        };

        document.getElementById("voir_users").onclick = function() {
            console.log("users saisis ----->");
            console.log(users);
        };

    };

    return {
        inverserCouleur: inverserCouleur,
        inverserCouleur2: inverserCouleur2,
        inverserCouleur3: inverserCouleur3,
        inverserLettres: inverserLettres,
        inverserLettres2: inverserLettres2,
    };
}());
