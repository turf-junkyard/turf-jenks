var ss = require('simple-statistics');

module.exports = function(fc, field, num){
  var vals = [];
  var breaks = [];

  fc.features.forEach(function(feature){
    if(!(feature.properties[field]===undefined)){
      vals.push(feature.properties[field]);
    }
  });
  breaks = ss.jenks(vals, num);

  return breaks;
}
