var tp1 = (function tp1() {
    "use strict";

    var modules, ids = ["header", "logo", "utility", "nav_ariane", "search", "sidebar", "service_options", "blank_1", "page", "content", "blank_2", "blank_3", "footer", "copyright"];

    function getModuleInfos(num) {
        return {
            id: modules[num].id,
            className: modules[num].className,
            tagName: modules[num].tagName,
            metrics: modules[num].getBoundingClientRect()
        };
    }

    function getPageModulesBis() {
        var temp = [];
        temp.push(document.getElementById("header"));
        temp.push(document.getElementById("logo"));
        temp.push(document.getElementById("utility"));
        temp.push(document.getElementById("nav_ariane"));
        temp.push(document.getElementById("search"));
        temp.push(document.getElementById("sidebar"));
        temp.push(document.getElementById("service_options"));
        temp.push(document.getElementById("blank_1"));
        temp.push(document.getElementById("page"));
        temp.push(document.getElementById("content"));
        temp.push(document.getElementById("blank_2"));
        temp.push(document.getElementById("blank_3"));
        temp.push(document.getElementById("footer"));
        temp.push(document.getElementById("copyright"));
        return temp;
    }

    function getPageModules() {
        var i, temp = [];
        for (i = 0; i < ids.length; i += 1) {
            temp.push(document.getElementById(ids[i]));
        }
        return temp;
    }

    function styliserModule(num, color, bg) {
        modules[num].style.color = color;
        modules[num].style.background = bg;
        return modules[num];
    }

    window.onload = function init() {
        /* l'ordre des appels de fonctions est important ! */
        var modStylise, infos;
        modules = getPageModules();
        console.log("-- liste des modules --");
        console.log(modules);
        console.log("-----------------------");
        modStylise = styliserModule(9, "white", "green");
        console.log("-- module stylisé --");
        console.log(modStylise);
        console.log("-----------------------");
        infos = getModuleInfos(3);
        console.log("-- infos d'un module --");
        console.log(infos);
        console.log("--------FIN DU TP !---------------");
    };

    return {
        getModuleInfos: getModuleInfos,
        getPageModules: getPageModules,
        styliserModule: styliserModule
    }
}());
