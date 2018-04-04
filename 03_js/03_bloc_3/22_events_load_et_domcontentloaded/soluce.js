/*jshint esversion: 6*/
const init = (function init(e1, e2) {

    const allActionsOnload = function(evt) {
        console.log(evt.type + " @init => allActionsOnload");
        console.log(e1.selectBody());
        console.log(e2.selectTitles());
    };

    window.onload = allActionsOnload;

}(exemple1, exemple2));
