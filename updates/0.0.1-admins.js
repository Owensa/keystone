var keystone = require('keystone');
var User = keystone.list('User');

module.exports = function (done) {
	new User.model({
		name: {
			first: 'admin',
			last: 'admin'
		},
		email: 'admin@wethem.us',
		password: 'wethemus',
		isAdmin: true,
		isProtected: false,
	})
	.save(done);
};
