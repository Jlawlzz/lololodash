var _ = require("lodash")

var nameChanger = function(names) {
  var fxdNames = _.chain(names)
    .sort()
    .map(function(name) {
      return (name.toUpperCase() + 'CHAINED')
    })
  return fxdNames
}


module.exports = nameChanger
