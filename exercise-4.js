var _ = require("lodash")

var tempTracker = function(townTemps) {
  var tempCategory = { hot: [], warm: [] }
  _.forEach(townTemps, function(temps, town) {
      if (_.every(temps, function(temp) { return temp > 19 })) {
        tempCategory.hot.push(town)
      } else if (_.some(temps, function(temp) { return temp > 19 })) {
        tempCategory.warm.push(town)
      }
    })
    return tempCategory
  }


module.exports = tempTracker
