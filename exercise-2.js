var _ = require("lodash")

var sortBy = function (articles) {
  var init = _.sortBy(articles, 'quantity')
  return _.reverse(init)
}

module.exports = sortBy
