const  keystone = require('keystone');
const PostCategory = keystone.list('PostCategory');
const Post = keystone.list('Post');

/**
 * List Categories
 */
exports.list = function(req, res) {
  PostCategory.model.find().sort('name')
    .exec((err, cats) => {
    if (err) {
			return res.apiError('database error', err);	
		}
		
    res.apiResponse(cats);

  });
};

/**
 * Get Category by Id
 */
exports.get = function(req, res) {
	Post.paginate({
		page: req.query.page || 1,
		perPage: 12,
		maxPages: 8,
		filters: {
			categories: req.params.id,
		},
	})
		.where('categories', req.params.id)
		.sort('publishedDate')
		.exec((err, posts) => {
    	if (err) return res.apiError('database error', err);
    	if (!item) return res.apiError('not found');

    res.apiResponse(posts);
  });
};
