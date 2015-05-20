/* global $:false */
/* global L:false */
/* global w3c_slidy:false */

w3c_slidy.mouse_click_enabled = false;

var tnris, result;
$.get('data/tnris.geojson', function (data) {
  tnris = JSON.parse(data);
  console.log(tnris);
});

var setupMap = function(el) {
  var map = L.map(el, {
    center: [31.96860, -99.90181],
    zoom: 6
  });

  var base = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
  });

  map.addLayer(base);
  return map;
};

$('button').one('click', function (event) {
  event.preventDefault();
  event.stopPropagation();

  var $map = $(this).parent().find('.map');
  $map.show();

  var map = setupMap($map[0]);
  var code = $(this).parent().find('code').text();
  $(this).hide();

  eval(code);

  console.log(result);
  map.addLayer(L.geoJson(result, {
    pointToLayer: function (featureData, latlng) {
      return L.circle(latlng, 2500);
    }
  }));

  //todo: and also run the code
});

$('body').click(function (event) {
  //todo: only stop propagation if
  event.stopPropagation();
});

