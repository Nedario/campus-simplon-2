/*jshint esversion : 6  */
const moduleJauge = (function moduleJauge() {
  "use strict";
  var bg, val, hint, jauge;

  function setJauge(e) {
    const src = e.target || e.srcElement;
    const newVal = Number(src.value);

    if (newVal >= 50) hint.classList.add("is-half");
    else if (hint.classList.contains("is-half")) hint.classList.remove("is-half");

    val.textContent = newVal;
    bg.style.width = newVal + "%";
  }

  function init() {
    jauge = document.getElementById("jauge_1");
    bg = jauge.querySelector(".bg");
    val = jauge.querySelector(".value");
    hint = jauge.querySelector(".hint");

    document.getElementById("my_range").oninput = setJauge;
  }

  window.addEventListener("DOMContentLoaded", init);

}());
