/* global $:false */
/* global L:false */
/* global w3c_slidy:false */

w3c_slidy.mouse_click_enabled = false;

var tnris, result, display;
$.get('data/tnris.geojson', function (data) {
  tnris = JSON.parse(data);
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
  var $this = $(this);
  var $parent = $this.parent();

  var $map = $('<div class="map"></div>');
  $parent.append($map);


  var map = setupMap($map[0]);
  var code = $parent.find('code').text();
  $this.hide();

  if (code) {
    eval(code);
  }

  var geojsonLayer = L.geoJson(result, {
    pointToLayer: function (featureData, latlng) {
      return L.circle(latlng, 2500);
    },
    style: {
      'color': '#2ECC71',
      'opacity': 0.8
    }
  }).addTo(map);

  map.fitBounds(geojsonLayer.getBounds());

  if (display) {
    $parent.append('<p class="display">' + display + '</p>');
  }

  code = null;
  display = null;
});

$('body').click(function (event) {
  //todo: only stop propagation if
  event.stopPropagation();
});

