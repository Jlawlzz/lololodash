var _ = require("lodash")

var commentSort = function(comments) {
    var groupComments = _.groupBy(comments, 'username')
    var commentCount = []
    _.forEach(groupComments, function(comments) {
      commentCount.push({username: comments[0]['username'], comment_count: _.size(comments)})
    })
    return _.reverse(commentCount)
}


module.exports = commentSort
