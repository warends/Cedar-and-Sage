var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * About Model
 * ==========
 */

var About = new keystone.List('About', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

About.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	profileImage: { type: Types.CloudinaryImage },
	description: { type: Types.Html, wysiwyg: true, height: 150 },
	cta: { type: Types.Text }
});

About.defaultColumns = 'state|20%, author|20%, publishedDate|20%, seoImage|20%';
About.register();
