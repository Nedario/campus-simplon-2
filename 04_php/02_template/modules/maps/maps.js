/*jshint esversion: 6*/
var maps = (function maps() {
  "use strict";

  var map, mapElement, searchBar, searchBtn;

  function drawMap() {
    
    const latLong = {lat: 48.952924, lng: 2.490464};

    map = new google.maps.Map(mapElement, {
      center: latLong,
      zoom: 16
    });

    var marker = new google.maps.Marker({
      position: latLong,
      map: map,
      title: 'Simplon Aulnay'
    });
  }

  function searchMap() {
    console.log("search map");
  }

  function init() {
    searchBar = document.getElementById('search_map');
    searchBtn = document.getElementById('search_map_btn');
    mapElement = document.getElementById('map');

    if (mapElement) drawMap();

    if (searchBar && searchBtn) {
      searchMap();
    }


  }

  return {
    init: init
  };

}());
