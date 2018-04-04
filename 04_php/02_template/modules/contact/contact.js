/*jshint esversion:6*/
var contact = (function contact() {
  "use strict";

  function checkForm() {

  }

  function doAjax(evt) {
    evt.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "libs/form.php");

    xhr.onload = function(){
        console.log(this.response);
    };

    xhr.send(new FormData(document.getElementById("contact_form")));
  }

  function init() {
    const btn = document.getElementById("contact_async");
    if (btn)
    btn.onclick = doAjax;
  }

  return {
    init: init
  };

}());
