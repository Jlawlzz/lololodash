var _ = require("lodash")

var templater = function(param) {
  var greeting = _.template('Hello <%= name %> (logins: <%= loginCount %>)')
  return greeting({'name': param.name, 'loginCount': _.size(param.login)})
}


module.exports = templater
