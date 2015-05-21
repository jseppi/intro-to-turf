% Intro to Turf.js
% James Seppi
% TNRIS GeoRodeo - May 22, 2015

# What is Turf?


# Some History

(from Tom MacWright - [http://www.macwright.org/presentations/turf-geodc](http://www.macwright.org/presentations/turf-geodc))

. . .

2000: [Java Topology Suite (JTS)](http://tsusiatsoftware.net/jts/main.html)

. . .

2003: [GEOS](http://trac.osgeo.org/geos/), JTS port to C++

. . .

2008: [Shapely](http://toblerity.org/shapely/manual.html), interface of GEOS to Python

. . .

2011: [JavaScript Topology Suite (JSTS)](https://github.com/bjornharrtell/jsts), JTS port to JS

. . .

2014: [Turf](http://turfjs.org), not a port

# Why?



"Isomorphic"



# How to Use

GeoJSON

# GeoJSON

Lingua franca for geospatial data on the web

Not GeoJohnson

geojson.org

geojson.io

GitHub renders it

github.com/tx.geojson

# Examples

In the browser

On the server

-----------------------------------------------------------

```javascript
result = tnris;
```

<button class="button">Show Demo</button>

-----------------------------------------------------------

```javascript
result = turf.explode(tnris);
display = 'Num Points: ' + result.features.length;
```

<button class="button">Show Demo</button>

-----------------------------------------------------------

```javascript
result = turf.convex(turf.explode(tnris));
```

<button class="button">Show Demo</button>

-----------------------------------------------------------

```javascript
var bbox = turf.extent(tnris);
var grid = turf.hexGrid(bbox, 50, 'miles');
result = grid;
```

<button class="button">Show Demo</button>

-----------------------------------------------------------

```javascript
var bbox = turf.extent(tnris);
var grid = turf.hexGrid(bbox, 50, 'miles');
var points = turf.explode(tnris);
var counted = turf.count(grid, points, 'pointCount');
//TODO: Style by point count
result = counted;
```

<button class="button">Show Demo</button>

-----------------------------------------------------------

# Documentation and Official Examples

Something that the core team has worked hard on (morganherlocker, tmcw, lyzidiamond, tcql)

# Visualizations, Tools

http://turfjs.party/

etc

# Get Involved

Open Open-Source

GitHub

1200 stars

15 owners

```javascript
var x = y;
x++;
function abc(dev) {
  return dev;
}
```
