var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Curator Model
 * ==========
 */

var Curator = new keystone.List('Curator', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Curator.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	seoImage: { type: Types.CloudinaryImage },
	bannerImage: { type: Types.CloudinaryImage },
	quote: { type: Types.Html, wysiwyg: true, height: 350 },
	'images': {
		image1: { type: Types.CloudinaryImage },
		image1Text: { type: Types.Text },
		image2: { type: Types.CloudinaryImage },
		image2Text: { type: Types.Text },
		image3: { type: Types.CloudinaryImage },
		image3Text: { type: Types.Text },
		image4: { type: Types.CloudinaryImage },
		image4Text: { type: Types.Text }
	},
	upperContent: { type: Types.Html, wysiwyg: true, height: 350 },
	lowerContent: { type: Types.Html, wysiwyg: true, height: 350 },
	cta: { type: Types.Text }
});

Curator.defaultColumns = 'state|20%, author|20%, publishedDate|20%, seoImage|20%';
Curator.register();
