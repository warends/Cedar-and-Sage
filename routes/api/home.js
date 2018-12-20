var async = require('async'),
  keystone = require('keystone');

var Home = keystone.list('Home');

/**
 * List Posts
 */
exports.content = function(req, res) {
  Home.model.find()
    .where('state', 'published')
    .populate('author')
    .sort('-publishedDate')
    .exec((err, content) => {

    if (err) return res.apiError('database error', err);
    res.apiResponse(content);

  });
};
