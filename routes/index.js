var keystone = require('keystone');
var csv = require('csv');
var User = keystone.list("User");

exports = module.exports = function (req, res) {
	User.model.find(function (err, results) {
		if (err) { throw err; }

		var users = results.map(function (user) {
			return {
				firstName: user.name.first,
				lastName: user.name.last,
				email: user.email
			};
		});
	});
};