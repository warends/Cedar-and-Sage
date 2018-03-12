var async = require('async'),
  keystone = require('keystone');

var Post = keystone.list('Post');

/**
 * List Posts
 */
exports.list = function(req, res) {
  Post.model.find().populate('author categories').exec(function(err, items) {

    if (err) return res.apiError('database error', err);

    res.apiResponse(items);
  });
};

/**
 * Get Post by ID
 */
exports.get = function(req, res) {
  Post.model.findOne().populate('author categories').where('slug', req.params.slug).exec(function(err, item) {

    if (err) return res.apiError('database error', err);
    if (!item) return res.apiError('not found');

    res.apiResponse(item);
  });
};
