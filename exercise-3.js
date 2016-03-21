var _ = require("lodash")

var sizer = function (towns) {
  _.forEach(
    towns,
    function(town) {
      if (town.population > 1.0) {
        town['size'] = 'big'
      } else if (town.population > 0.5) {
        town['size'] = 'med'
      } else {
        town['size'] = 'small'
      }
    }
  )
  return towns
}

module.exports = sizer
