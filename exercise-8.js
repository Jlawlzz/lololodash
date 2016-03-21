var _ = require("lodash")

var rankedLancer = function(lancers) {
  var sals = _.map(lancers, function (lancer) {
    return lancer.income
  })

  var average = _.reduce(sals, function(sum, sal) {
    return sum + sal
  })

  average = average / _.size(lancers)

  var overPerform = _.filter(
                    lancers,
                    function(lancer) {
                      return lancer.income > average
                    }
                  )

  var underPerform = _.filter(
                    lancers,
                    function(lancer) {
                      return lancer.income <= average
                    }
                  )

  var pReviews = { average: average,
                   underperform: _.sortBy(underPerform, 'income'),
                   overperform: _.sortBy(overPerform, 'income')}

  return pReviews
}

module.exports = rankedLancer
