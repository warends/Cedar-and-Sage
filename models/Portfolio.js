var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Portfolio Model
 * ==========
 */

var Portfolio = new keystone.List('Portfolio', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Portfolio.add({
	title: {type: String, required: true },
	state: {type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: {type: Types.Relationship, ref: 'User', index: true },
	publishedDate: {type: Types.Date, index: true, dependsOn: { state: 'published' } },
	content: {type: Types.Html, wysiwyg: true, height: 200 },
	displayImage: {type: Types.CloudinaryImage, required: true, initial: false},
	images: {type: Types.CloudinaryImages}
});

// Portfolio.schema.virtual('content.full').get(function () {
// 	return this.content.extended || this.content.brief;
// });

Portfolio.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Portfolio.register();
