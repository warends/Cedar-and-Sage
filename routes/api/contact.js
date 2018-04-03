const contact = require('../../controller/contact');

exports.contactForm = function(req, res) {
    contact.sendMail(res, res);
}

exports.qForm = function(req, res) {
    contact.sendQuestionaire(req, res)
}

exports.signupForm = function(req, res) {
    contact.sendSignup(req, res);
}
