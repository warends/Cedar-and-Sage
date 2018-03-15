let keystone = require('keystone');

exports.home = function(req, res) {
  let view = new keystone.View(req, res),
    locals = res.locals;
  view.render('home', {layout: false});
};

exports.services = function(req, res) {
  let view = new keystone.View(req, res),
    locals = res.locals;
  view.render('services', {layout: false});
};

exports.serviceDetail = function(req, res) {
  let view = new keystone.View(req, res),
    locals = res.locals;
  view.render('services-detail', {layout: false});
};

exports.eDesign = function(req, res) {
  let view = new keystone.View(req, res),
    locals = res.locals;
  view.render('e-design', {layout: false});
};

exports.questionaire = function(req, res) {
  let view = new keystone.View(req, res),
    locals = res.locals;
  view.render('questionaire', {layout: false});
};

exports.modal = function(req, res) {
  let view = new keystone.View(req, res),
    locals = res.locals;
  view.render('modal', {layout: false});
};

exports.about = function(req, res) {
  let view = new keystone.View(req, res),
    locals = res.locals;
  view.render('about', {layout: false});
};

exports.banner = function(req, res) {
  let view = new keystone.View(req, res),
    locals = res.locals;
  view.render('banner', {layout: false});
};

exports.postDetail = function(req, res) {
  let view = new keystone.View(req, res),
    locals = res.locals;
  view.render('post-detail', {layout: false});
};
