/* jshint esversion: 6 */
var carrousel = (function carrousel(){
  "use strict";
  const carrousels = [];

  const Carrousel = function Carrousel(param) {
    try {
      this.target = param.target;
      this.images = param.images;
      this.height = param.height || 160;
      this.width = param.width || 300;
      this.position = 0;
      this.img = null;

      if (!(this instanceof Carrousel)) throw new Error("Carrousel needs new keyword");
      if (!param.images.length) throw new Error("Carrousel needs an image array to start");
      if (!param.images.splice) throw new Error("Carrousel needs an image array to start");
      if (!this.target) throw new Error("Carrousel needs a mounted parent element to start");

      this.createElement();

    } catch(err) {
      console.error(err);
    }
  };

  Carrousel.prototype.createElement = function next() {
    const carrousel = document.createElement("div");
    const btnN = document.createElement("i");
    const btnP = document.createElement("i");
    this.img = document.createElement("img");

    carrousel.id = "carrousel_" + (carrousels.length + 1);
    carrousel.className = "carrousel";
    carrousel.style.height = this.height + "px";
    carrousel.style.width = this.width + "px";

    btnN.className = "btn next";
    btnN.textContent = "next";
    btnP.className = "btn prev";
    btnP.textContent = "prev";

    this.img.className = "img";
    this.img.src = this.images[0];

    carrousel.appendChild(this.img);
    carrousel.appendChild(btnN);
    carrousel.appendChild(btnP);

    btnN.onclick = this.next.bind(this);
    btnP.onclick = this.prev.bind(this);

    this.target.appendChild(carrousel);
  };

  Carrousel.prototype.next = function next() {
    this.position = (this.position + 1 < this.images.length) ? this.position + 1 : 0;
    this.img.src = this.images[this.position];
  };

  Carrousel.prototype.prev = function prev() {
    this.position = (this.position - 1 >= 0) ? this.position - 1 : this.images.length - 1;
    this.img.src = this.images[this.position];
  };

  function add(p) {
    const c = new Carrousel(p);
    carrousels.push(c);
    return c;
  }

  function get() {
    return carrousels;
  }

  return {
    add: add,
    get: get
  };

}());
