// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');
var Twig = require('twig');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

const mongoString = keystone.get('env') === 'production' ? process.env.MONGO_URI : process.env.MONGO_URI_STAGE;

keystone.init({
	'name': 'Cedar and Sage',
	'brand': 'Cedar and Sage',
	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'twig',
	'twig options': { method: 'fs' },
	'custom engine': Twig.render,
	'emails': 'templates/emails',
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'mongo': mongoString,
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));

// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	pages: ['Home', 'About', 'Curator'],
	posts: ['posts', 'post-categories', 'portfolios'],
	galleries: 'galleries',
	enquiries: 'enquiries',
	users: 'users',
});

// Start Keystone to connect to your database and initialise the web server
if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
	console.log('WARNING: MISSING MAILGUN CREDENTIALS');
}

console.log(`ENV: ${keystone.get('env')}, DB: ${mongoString}`);

keystone.start();
