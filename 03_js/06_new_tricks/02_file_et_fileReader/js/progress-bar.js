/* jshint esversion : 6 */

const ProgressBar = function ProgressBar(f, index, target) {
  "use strict";
  this.progress = target.appendChild(this.createBarCustom(index));
  this.file = f;
  this.reader = new FileReader();
  this.reader.onprogress = this.setValue.bind(this);
  this.reader.onload = this.setValue.bind(this);
  this.reader.readAsDataURL(this.file);
};

ProgressBar.prototype.createBarNative = function createBarNative(index) {
  const bar = document.createElement("progress");
  const hint = document.createElement("span"); // le texte de progression
  hint.classList.add("hint");
  bar.min = "0";
  bar.max = "100";
  bar.appendChild(hint);
  return bar;
};

ProgressBar.prototype.createBarCustom = function createBarCustom(index) {
  const progress = document.createElement("div"); // définition du conteneur de la bar
  const bar = document.createElement("div"); // la bar elle même
  const hint = document.createElement("span"); // le texte de progression
  // attribution ...
  progress.classList.add("progress-bar");
  progress.id = "bar_" + index;
  bar.classList.add("bar");
  hint.classList.add("hint");
  // insertion des sous-éléments de la bar
  bar.appendChild(hint);
  progress.appendChild(bar);
  // retour de la bar constituée
  return progress;
};

ProgressBar.prototype.setValue = function setValue(e) {
  const bar = this.progress.querySelector(".bar");
  const hint = this.progress.querySelector(".hint");
  const percent = ((e.loaded * 100) / e.total );
  if (percent >= 50) hint.style.color = "white";
  hint.textContent = Math.round(percent) + "%";
  bar.style.width = percent + "%";
  this.progress.value = percent;
};
