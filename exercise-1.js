var _ = require("lodash")

var worker = function (people) {
  return _.filter(people, { "active": true })
}

module.exports = worker
