console.log(this);

(function () {
    console.log(this);
}());

(function () {
    "use strict";
    console.log(this);
}());

function test() {
    "use strict";
    console.log(this);
    btn = document.getElementById("mon_btn");
    btn.onclick = function() {
        console.log(this);
    };
}

window.onload = test;
