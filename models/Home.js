var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Home Model
 * ==========
 */

var Home = new keystone.List('Home', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Home.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	seoImage: { type: Types.CloudinaryImage },
	'Banner': {
		bannerImage: { type: Types.CloudinaryImage },
		bannerText: { type: Types.Textarea },
	},
	'Curator': {
		box1Image: { type: Types.CloudinaryImage },
		box1Text: { type: Types.Textarea },
		box2Image: { type: Types.CloudinaryImage },
		box2Text: { type: Types.Textarea }
	},
	'Style Quiz': {
		styleQuizText: { type: Types.Textarea },
		styleQuizImage: { type: Types.CloudinaryImage }
	},
	cta: { type: Types.Text }
});

Home.defaultColumns = 'state|20%, author|20%, publishedDate|20%, seoImage|20%';
Home.register();
