const Email = require('keystone-email');
const key = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;

exports.contactForm = function (req, res) {
	new Email('./templates/emails/contact-email.twig', {
		transport: 'mailgun',
	}).send({
		body: {
			name: req.body.name,
			note: req.body.note,
			email: req.body.email,
		},
	}, {
		apiKey: key,
		domain: domain,
		to: 'haybagwell@gmail.com',
		from: {
			name: 'Cedar and Sage Design',
			email: 'hayley@cedarandsagedesign.com',
		},
		subject: `New Message From ${req.body.name}`,
	}, function (err, info) {
		if (err) {
			console.log(err);
			res.json({ message: err.toString() });
		} else {
			console.log('SUCCESS ', info);
			res.json(req.body);
		}
	});
};

exports.signupForm = function (req, res) {
	const data = req.body;
	new Email('./templates/emails/signup-email.twig', {
		transport: 'mailgun',
	}).send({
		body: {
			firstName: data.firstName,
			lastName: data.lastName,
			note: data.note,
			email: data.email,
			include: data.include,
		},
	}, {
		apiKey: key,
		domain: domain,
		to: 'haybagwell@gmail.com',
		from: {
			name: 'Cedar and Sage Design',
			email: 'hayley@cedarandsagedesign.com',
		},
		subject: `${data.firstName} has signed up on Cedar and Sage`,
	}, function (err, info) {
		if (err) {
			console.log(err);
			res.json({ message: err.toString() });
		} else {
			console.log('SUCCESS ', info);
			res.json(data);
		}
	});
};

exports.qForm = function (req, res) {
	const data = req.body;
	new Email('./templates/emails/q-form-email.twig', {
		transport: 'mailgun',
	}).send({
		body: {
			name: data.name,
			phone: data.phone,
			note: data.note,
			email: data.email,
			q1: data.q1,
			q2: data.q2,
			q3: data.q3,
			q4: data.q4,
			q5: data.q5,
			q6: data.q6,
		},
	}, {
		apiKey: key,
		domain: domain,
		to: 'haybagwell@gmail.com',
		from: {
			name: 'Cedar and Sage Design',
			email: 'hayley@cedarandsagedesign.com',
		},
		subject: `A customer filled out your questioniare!`,
	}, function (err, info) {
		if (err) {
			console.log(err);
			res.json({ message: err.toString() });
		} else {
			console.log('SUCCESS ', info);
			res.json(data);
		}
	});
};

exports.styleQuiz = function (req, res) {
	const data = req.body;
	new Email('./templates/emails/style-quiz-email.twig', {
		transport: 'mailgun',
	}).send({
		body: {
			firstName: data.firstName,
			lastName: data.lasttName,
			note: data.note,
			email: data.email,
			answers: data.answers,
		},
	}, {
		apiKey: key,
		domain: domain,
		to: 'haybagwell@gmail.com',
		from: {
			name: 'Cedar and Sage Design',
			email: 'hayley@cedarandsagedesign.com',
		},
		subject: `A customer filled out your style quiz!`,
	}, function (err, info) {
		if (err) {
			console.log(err);
			res.json({ message: err.toString() });
		} else {
			console.log('SUCCESS ', info);
			res.json(data);
		}
	});
};
