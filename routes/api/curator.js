var async = require('async'),
  keystone = require('keystone');

var Curator = keystone.list('Curator');

/**
 * List Posts
 */
exports.content = (req, res) => {
  Curator.model.find()
    .where('state', 'published')
    .populate('author')
    .sort('-publishedDate')
    .exec((err, content) => {

    if (err) return res.apiError('database error', err);
    res.apiResponse(content);

  });
};
