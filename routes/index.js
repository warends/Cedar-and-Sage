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

	//all angular partials
	app.get('/uiViews/home', routes.views.ui.home);
	app.get('/uiViews/services', routes.views.ui.services);
	app.get('/uiViews/services-detail', routes.views.ui.serviceDetail);
	app.get('/uiViews/curator', routes.views.ui.curator);
	app.get('/uiViews/pricing', routes.views.ui.pricing);
	app.get('/uiViews/pricing-detail', routes.views.ui.pricingDetail);
	app.get('/uiViews/questionaire', routes.views.ui.questionaire);
	app.get('/uiViews/style-quiz', routes.views.ui.styleQuiz);
	app.get('/uiViews/style-quiz-results', routes.views.ui.styleQuizResults);
	app.get('/uiViews/modal', routes.views.ui.modal);
	app.get('/uiViews/about', routes.views.ui.about);
	app.get('/uiViews/banner', routes.views.ui.banner);
	app.get('/uiViews/posts', routes.views.ui.posts);
	app.get('/uiViews/post-detail', routes.views.ui.postDetail);
	app.get('/uiViews/landing-page', routes.views.ui.landingPage);
	app.get('/uiViews/toc', routes.views.ui.toc);
	app.get('/uiViews/privacy', routes.views.ui.privacy);

	//all api routes
	app.get('/api/home/content', [keystone.middleware.api, keystone.middleware.cors], routes.api.home.content);
	app.get('/api/about/content', [keystone.middleware.api, keystone.middleware.cors], routes.api.about.content);
	app.get('/api/curator/content', [keystone.middleware.api, keystone.middleware.cors], routes.api.curator.content);
	app.get('/api/posts/list', [keystone.middleware.api, keystone.middleware.cors], routes.api.posts.list);
	app.get('/api/post/:slug', [keystone.middleware.api, keystone.middleware.cors], routes.api.posts.get);
	app.post('/api/contact-form', [keystone.middleware.api, keystone.middleware.cors], routes.api.contact.contactForm);
	app.post('/api/free-room-signup', [keystone.middleware.api, keystone.middleware.cors], routes.api.contact.signupForm);
	app.post('/api/questionaire-signup', [keystone.middleware.api, keystone.middleware.cors], routes.api.contact.qForm);
	app.post('/api/style-quiz', [keystone.middleware.api, keystone.middleware.cors], routes.api.contact.styleQuiz);

	app.get('*', routes.views.index);

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
};
