var ss = require('simple-statistics');

/**
* Given a FeatureCollection, return the [Jenks Natural breaks](http://en.wikipedia.org/wiki/Jenks_natural_breaks_optimization)
* of a given property
* @module turf/jenks
* @param {FeatureCollection} input a FeatureCollection of any type
* @param {string} field the property in `input` on which to calculate Jenks natural breaks
* @param {number} numberOfBreaks number of classes in which to group the data
* @return {Array<number>} the break number for each class plus the minimum and maximum values
* @example
* var points = turf.featurecollection([
*   turf.point(5,5, {population: 200}),
*   turf.point(1,3, {population: 600}),
*   turf.point(14,2, {population: 100}),
*   turf.point(13,1, {population: 200}),
*   turf.point(19,7, {population: 300})]);
* var breaks = turf.jenks(points, 'population', 2);
* //=breaks
*/
module.exports = function(fc, field, num){
  var vals = [];
  var breaks = [];

  fc.features.forEach(function(feature){
    if(feature.properties[field]!==undefined){
      vals.push(feature.properties[field]);
    }
  });
  breaks = ss.jenks(vals, num);

  return breaks;
};
