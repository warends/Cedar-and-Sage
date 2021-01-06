const  keystone = require('keystone');
const Post = keystone.list('Post');

/**
 * List Posts
 */
exports.list = function(req, res) {
  Post.paginate({
		page: req.query.page || 1,
		perPage: 12,
		maxPages: 8,
		filters: {
			state: 'published',
		},
	})
    .where('state', 'published')
    .populate('author categories')
    .sort('-publishedDate')
    .exec((err, posts) => {
    if (err) {
			return res.apiError('database error', err);	
		}
		
    res.apiResponse(posts);

  });
};

/**
 * Get Post by SLUG
 */
exports.get = function(req, res) {
  Post.model.findOne().populate('author categories').where('slug', req.params.slug).exec(function(err, item) {

    if (err) return res.apiError('database error', err);
    if (!item) return res.apiError('not found');

    res.apiResponse(item);
  });
};
