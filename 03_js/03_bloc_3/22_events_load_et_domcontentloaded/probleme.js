/*jshint esversion: 6*/


const exemple2 = (function ex2() {
    console.log("--------- debut exécution ex2--------");

    const selectTitles = function() {
        return document.querySelectorAll(".title");
    };

    window.addEventListener("DOMContentLoaded", function(evt) {
        console.log(evt.type  + " @ex2");
        // console.log(selectTitles());
    });

    window.onload = function(evt) {
        console.log(evt.type  + " @ex2");
        // console.log(selectTitles());
    };

    console.log("--------- fin exécution ex2--------");

    return {
        selectTitles: selectTitles
    };
}());

const exemple1 = (function ex1() {
    console.log("------- debut exécution ex1----------");

    const selectBody = function() {
        return document.querySelector("body");
    };

    window.addEventListener("DOMContentLoaded", function(evt) {
        console.log(evt.type  + " @ex1");
        // console.log(selectBody());
    });

    window.onload = function(evt) {
        console.log(evt.type + " @ex1"); // cet appel est "ecrasé" par le load declenché par exemple2
        // console.log(selectBody());
    };

    console.log("--------- fin exécution ex1----------");

    return {
        selectBody: selectBody
    };
}());
