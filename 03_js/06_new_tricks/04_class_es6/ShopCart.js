/*jshint esversion : 6 */
const appClass = (function appClass() {
  "use strict";

  class ShopCart {

    constructor(c) {
      this.customer = c || null;
      this.items = [];
      this.total = 0;
    }

    setItem(i) {
      try {
        if (!i.price) throw new Error("un produit doit avoir un prix !");

        this.total += i.price;
        return this.items.push(i);

      } catch(err) {
        console.error(err);
      }
    }

    getTotal() {
      return this.total;
    }

    getItems() {
      return this.items;
    }
  }

  const sc = new ShopCart({name: "billy"});
  sc.setItem({label: "sport shoes", price: 100});
  console.log(sc);


}());
