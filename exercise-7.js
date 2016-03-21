var _ = require("lodash")

var orderTotal = function(orders) {

  var totalOrders = []

  _.forEach(orders, function (order) {

    if (_.size(totalOrders) == 0) {
      totalOrders.push({article: order.article, total_orders: order.quantity})

    } else {

      var match = _.find(totalOrders, function(orderTarget) { return orderTarget.article == order.article })

      if (match != null) {
        match.total_orders += order.quantity

      } else {
      totalOrders.push({article: order.article, total_orders: order.quantity})
      }
    }
  })
  return _.reverse(_.sortBy(totalOrders, function(order){ return order.total_orders}))
}

module.exports = orderTotal
