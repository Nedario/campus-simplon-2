/*jshint esversion : 6 */
const moduleJaugeConstruct = (function moduleJauge() {
  "use strict";

  var
  interval,
  parentId = "wrap_jauges",
  jauges = [],
  files = ["a", "b", "c", "d"];

  function Jauge(index) {
    this.element = this.createMarkup(index);
    this.bg = this.element.querySelector(".bg");
    this.val = this.element.querySelector(".value");
    this.hint = this.element.querySelector(".hint");
    document.getElementById(parentId).appendChild(this.element);
  }

  Jauge.prototype.createMarkup = function (index) {
    const template = document.createElement('template');
    template.innerHTML = `<div id="jauge_${index}" class="jauge">
      <span class="hint">
        <span class="value">0</span>
        <span class="unit">%</span>
      </span>
      <div class="bg"></div>
    </div>`;
    return template.content.firstChild;
  };

  Jauge.prototype.setValue = function (newVal) {

    if (newVal >= 50) {
      this.hint.classList.add("is-half");

    } else if (this.hint.classList.contains("is-half")) {
      this.hint.classList.remove("is-half");
    }

    this.val.textContent = newVal;
    this.bg.style.width = newVal + "%";
  };

  function init() {
    // on créé autant de jauges que de pseudo fichiers ...
    files.forEach( (file, index) => {
      jauges.push(new Jauge(index));
    });

    // console.log(jauges); // affiche tous les objets Jauge

    document.getElementById("btn_add_jauge").onclick = e => {
      jauges.push(new Jauge(jauges.length - 1));
    };

    document.getElementById("my_range").oninput = e => {
      const currentValue = e.target ? e.target.value : e.srcElement.value;
      jauges.forEach( jauge => {
        jauge.setValue(currentValue);
      });
    };
  }

  window.addEventListener("DOMContentLoaded", init);

  return {
    jauges: jauges
  };

}());
