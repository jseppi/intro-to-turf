% Intro to Turf.js
% James Seppi
% TNRIS GeoRodeo - May 22, 2015

# What is Turf.js?

JavaScript library for geospatial analysis

. . .

Runs in the browser, or in [Node.js](http://nodejs.org)

. . .

Collection of small modules

# Modules

turf-area

. . .

turf-buffer

. . .

turf-distance

. . .

turf-intersect, turf-union, turf-merge

. . .

turf-aggregate, turf-along, turf-average, turf-bbox-polygon, turf-bearing, turf-bezier, turf-center, turf-centroid, turf-combine, turf-concave, turf-convex, turf-count, turf-destination, turf-deviation, turf-envelope, turf-erase, turf-explode, turf-extent, turf-featurecollection, turf-filter, turf-flip, turf-hex-grid, turf-inside, turf-isolines, turf-jenks, turf-kinks, turf-line-distance, turf-line-slice, turf-linestring, turf-max, turf-median, turf-midpoint, turf-min, turf-nearest, turf-planepoint, turf-point, turf-point-grid, turf-point-on-line, turf-point-on-surface, turf-polygon, turf-quantile, turf-random, turf-reclass, turf-remove, turf-sample, turf-simplify, turf-size, turf-square, turf-square-grid, turf-sum, turf-tag, turf-tin, turf-triangle-grid, turf-variance, turf-within


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

# Some History

Project started and managed by Morgan Herlocker (now at Mapbox)

Open Source, MIT-licensed

Aggregation, Measurement, Transformation, Misc, Interpolation, Classification, Joins, Types, and Helpers

# Why?

"Isomorphic"

# How to Use

GeoJSON

# GeoJSON

Lingua franca for geospatial data on the web

Not GeoJohnson

Point, LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon

GeometryCollection, Feature, FeatureCollection

geojson.org

geojson.io

GitHub renders it

github.com/tx.geojson


# Word of Warning

Browser rendering of vectors is kinda slow

turf is better on server-side

but nonetheless, it is fun to see in a web map


# Examples

```javascript
//tnris geojson made with rasterio
result = tnris;
```

<button class="button">Show Demo</button>

-----------------------------------------------------------

# buffer, union, intersection

-----------------------------------------------------------

```javascript
result = turf.explode(tnris);
display = 'Num Points: ' + result.features.length;
```

<button class="button">Show Demo</button>

-----------------------------------------------------------


```javascript
var merged = turf.merge(tnris);
var polys = merged.geometry.coordinates.map(function (c) {
  return turf.simplify(turf.polygon(c), 0.1, false);
});
result = turf.featurecollection(polys);
```

<button class="button">Show Demo</button>

-----------------------------------------------------------

```javascript
//use simplified result from previous example
result = turf.explode(result);
display = 'Num Points: ' + result.features.length;
```

<button class="button">Show Demo</button>

-----------------------------------------------------------

```javascript
//use exploded result from previous example
result = turf.tin(result);
```

<button class="button">Show Demo</button>

-----------------------------------------------------------

# Grids

```javascript
var bbox = turf.extent(tnris);
var grid = turf.squareGrid(bbox, 50, 'miles');
var points = turf.explode(tnris);
var counted = turf.count(grid, points, 'pointCount');
result = counted;
```

<button class="button">Show Demo</button>

-----------------------------------------------------------

```javascript
var bbox = turf.extent(tnris);
var grid = turf.triangleGrid(bbox, 50, 'miles');
var points = turf.explode(tnris);
var counted = turf.count(grid, points, 'pointCount');
result = counted;
```

<button class="button">Show Demo</button>

-----------------------------------------------------------

```javascript
var bbox = turf.extent(tnris);
var grid = turf.hexGrid(bbox, 50, 'miles');
var points = turf.explode(tnris);
var counted = turf.count(grid, points, 'pointCount');
result = counted;
```

<button class="button">Show Demo</button>

-----------------------------------------------------------

# Documentation

Something that the core team has worked hard on ([morganherlocker](https://github.com/morganherlocker), [tmcw](https://github.com/tmcw), [lyzidiamond](https://github.com/lyzidiamond), [tchannel](https://github.com/tchannel))

![](img/turfdocs.png)

-----------------------------------------------------------

![](img/turfdocs2.png)

-----------------------------------------------------------


# Visualizations, Tools

https://www.mapbox.com/blog/playback-the-iditarod-with-turf/

https://www.mapbox.com/blog/60-years-of-tornadoes-with-turf/

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
