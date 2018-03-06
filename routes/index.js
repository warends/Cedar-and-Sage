var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	api: importRoutes('./api'),
};

// Setup Route Bindings
exports = module.exports = function (app) {

	// Views
	app.get('/', routes.views.index);
	//app.get('/blog/:category?', routes.views.blog);
	//app.get('/blog/post/:post', routes.views.post);
	app.get('/gallery', routes.views.gallery);
	app.all('/contact', routes.views.contact);

	//all angular partials
	app.get('/uiViews/home', routes.views.home);
	app.get('/uiViews/services', routes.views.services);
	app.get('/uiViews/services-detail', routes.views.servicesDetail);
	app.get('/uiViews/e-design', routes.views.eDesign);
	app.get('/uiViews/questionaire', routes.views.questionaire);
	app.get('/uiViews/modal', routes.views.modal);
	app.get('/uiViews/about', routes.views.about);
	app.get('/uiViews/banner', routes.views.banner);
	app.get('/uiViews/blog', routes.views.blog);

	//all api routes
	app.get('/api/posts/list', [keystone.middleware.api, keystone.middleware.cors], routes.api.posts.list);

	app.get('*', routes.views.index);

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
