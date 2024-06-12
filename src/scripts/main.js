'use strict';

function initMap() {
  let mapReastaurant;
  let mapMerried;

  mapReastaurant = new google.maps.Map(document.getElementById('map-restaurant'),
    {
      center: {
        lat: 47.86636644473956,
        lng: 35.05962885142143,
      },
      zoom: 17,
    });

  mapMerried = new google.maps.Map(document.getElementById('map-merried'), {
    center: {
      lat: 47.83079492829225,
      lng: 35.15930220709443,
    },
    zoom: 17,
  });
}
