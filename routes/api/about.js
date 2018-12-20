var async = require('async'),
  keystone = require('keystone');

var About = keystone.list('About');

/**
 * List Posts
 */
exports.content = (req, res) => {
  About.model.find()
    .where('state', 'published')
    .populate('author')
    .sort('-publishedDate')
    .exec((err, content) => {

    if (err) return res.apiError('database error', err);
    res.apiResponse(content);

  });
};
