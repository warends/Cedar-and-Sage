var async = require('async'),
  keystone = require('keystone');

var Post = keystone.list('Post');

/**
 * List Posts
 */
exports.list = function(req, res) {
  Post.model.find().populate('author categories').exec(function(err, items) {

    if (err) return res.apiError('database error', err);

    // res.apiResponse({
    //   posts: items
    // });

    res.apiResponse(items);

  });
};
