/*jshint esversion: 6*/
/*global document, window, console*/


const listes1 = (function listes1() {
    "use strict";

    var compteur = 0, ul, todoInput;

    const verifierSaisie = function(str) {
        return str.length >= 1;
    };

    const deplacerTodo = function deplacerTodo() {
        // ici, this représente l'icône cliquée
        const liCible = this.parentElement.parentElement;
        // on remonte sur le parent du parent de l'icône (li)
        let next;
        // on vérifie si l'icône cliquée contient la classe fa-caret-up
        if (this.classList.contains("fa-caret-up")) {
            next = liCible.previousElementSibling;
            // on cherche le premier li frère gauche
            if (!next) return;
            // si next vaut null (cad si le li est premier de la liste)
            // on retourne directement (stop exécutio function)
            // pour éviter que le li soit inséré en fin de liste
        } else {
            let tmp = liCible.nextElementSibling;
            // on cherche le premier li frère droit
            if (tmp) {
                // si ce premier frère droit existe
                // on cherche son prochain frère droit
                next = tmp.nextElementSibling;
            }
        }
        console.log(next);
        ul.insertBefore(liCible, next);
    };

    const creerWidgetDeplacement = function creerWidgetDeplacement() {
        const div = document.createElement("div");
        const iconUp = document.createElement("i");
        const iconDown = document.createElement("i");
        div.classList.add("deplacement");
        iconUp.className = "fa fa-caret-up";
        iconDown.className = "fa fa-caret-down";
        iconUp.onclick = deplacerTodo;
        iconDown.onclick = deplacerTodo;
        div.appendChild(iconUp);
        div.appendChild(iconDown);
        return div;
    };

    const insererSaisie = function(str) {
        compteur += 1;
        const li = document.createElement("li");
        const input = document.createElement("input");
        const deplacement = creerWidgetDeplacement();

        input.type = "checkbox";
        li.classList.add("item");
        li.id = "item_" + compteur;
        li.textContent = str;
        li.appendChild(input);
        li.appendChild(deplacement);

        todoInput.value = "";
        todoInput.focus();
        return ul.appendChild(li);
    };

    const getCheckedTodos = function getCheckedTodos() {
        return document.querySelectorAll("#todo_list input:checked");
    };

    const supprimer = function supprimer(todos) {
        todos.forEach(function detacher(todo) {
            ul.removeChild(todo.parentElement);
            // todo.parentElement est chaque li contenant un input:checked
            // ul est la liste complete de todos
        });
        // OU !
        // for (let i = 0; i < todos.length; i += 1) {
        //     ul.removeChild(todos[i].parentElement);
        // }
    };

    const getNombreTodos = function getNombreTodos(todos) {
        return document.querySelectorAll("#todo_list .item").length;
    };

    const init = function init() {
        ul = document.getElementById("todo_list");
        todoInput = document.getElementById("saisie_todo");
        const btnInser = document.getElementById("valid_todo");
        const btnSuppr = document.getElementById("suppr_todo");

        btnInser.onclick = function lancerInsertion() {
            if (verifierSaisie(todoInput.value)) {
                insererSaisie(todoInput.value);

            } else alert("merci de vérifier votre saisie !");
        };

        btnSuppr.onclick = function lancerSuppression() {
            const tmp = getCheckedTodos();
            console.log(tmp);
            if (tmp.length) {
                supprimer(tmp);
                if (!getNombreTodos()) alert("Travail terminé !");
            }
        };
    };

    return {
        init: init
    };

}());

console.log("listes1 - api publique => ");
console.log(listes1);
console.log("--------------------------");

(function myWidgets() {
    "use strict";
    const listen = window.addEventListener;

    listen("DOMContentLoaded", function exec() {
        listes1.init();
    });
}());
