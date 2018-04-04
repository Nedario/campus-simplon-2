/*jshint esversion: 6*/
const localStorageApp = (function localStorageApp() {
  "use strict";
  var dom = {}, store, storeName = "myLocalDataStore";

  /*
    ##################################
  */

  const getStore = key => {
    var res;
    if (key) {
      res = getStore()[key]; // recursion ici : )
    } else {
      res = JSON.parse(localStorage.getItem(key || storeName));
    }
    return res;
  };

  const setDOMElements = () => {
    dom.btnAdd = document.getElementById("btn_add_store");
    dom.btnGet = document.getElementById("btn_read_store");
    dom.btnPreview = document.getElementById("btn_reveal");
    dom.preview = document.getElementById("wrap_preview");
    dom.inputVal = document.getElementById("new_val");
    dom.inputKey = document.getElementById("new_key");
  };

  const handleDOMEvents = () => {
    dom.btnPreview.onclick = e => {
      setStoreItem("hasPreview", !dom.preview.classList.toggle("is-hidden"));
      handlePreview();
    };
    dom.btnAdd.onclick = e => {
      setStoreItem(dom.inputKey.value, dom.inputVal.value);
    };
    dom.btnGet.onclick = e => {
      store = getStore();
      console.log(store);
    };
  };

  const handlePreview = () => {
    if (getStore("hasPreview")) {
      dom.preview.classList.remove("is-hidden");
      dom.btnPreview.textContent = "choisir un autre airBnB !";
    } else {
      dom.btnPreview.textContent = "voir la suite";
    }
  };

  const init = () => {
    console.log("ready to rock !");

    if (!getStore()) localStorage.setItem(storeName, JSON.stringify({}));

    setDOMElements(); // exécuter cette fonction en premier !
    handlePreview();
    handleDOMEvents();
  };

  const setStoreItem = (key, value) => {
    if (!key) return console.warn("hé coco, et ma clé !?! -_-' '");
    const o = getStore();
    o[key] = value;
    localStorage.setItem(storeName, JSON.stringify(o));
  };

  /*
    ##################################
  */

  window.addEventListener("DOMContentLoaded", init);

  return {
    getStore: getStore,
    setStoreItem: setStoreItem,
  };

}());
