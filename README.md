turf-jenks
==========
[![Build Status](https://travis-ci.org/Turfjs/turf-jenks.svg?branch=master)](https://travis-ci.org/Turfjs/turf-jenks)

Takes a set of features, a property name, and the desired number of breaks and outputs an array of natural breaks. This classification can be used in the isolines function or the isobands function, or for theming.

```javascript
var jenks = require('turf-jenks')
var fs = require('fs')

var propertyName = 'elevation'
var num = 10

var pts = JSON.parse(js.readFileSync('/path/to/points.geojson'))

var jenked = jenks(pts, 'elevation', num, function(err, breaks){

console.log(jenked) // [ 11, 12, 18, 25, 29, 41, 50, 55, 76, 90, 143 ]
```