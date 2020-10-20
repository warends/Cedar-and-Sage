var async = require('async'),
  keystone = require('keystone');

var Portfolio = keystone.list('Portfolio');

/**
 * List Portfolios
 */
exports.list = function(req, res) {
  Portfolio.model.find()
    .where('state', 'published')
    .populate('author categories')
    .sort('-publishedDate')
    .exec((err, items) => {

    if (err) return res.apiError('database error', err);
    res.apiResponse(items);

  });
};

/**
 * Get Portfolio by SLUG
 */
exports.get = function(req, res) {
  Portfolio.model.findOne().populate('author categories').where('slug', req.params.slug).exec(function(err, item) {

    if (err) return res.apiError('database error', err);
    if (!item) return res.apiError('not found');

    res.apiResponse(item);
  });
};
