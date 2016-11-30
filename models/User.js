var keystone = require('keystone');
var Types = keystone.Field.Types;

var User = new keystone.List('User', {
	nodelete: false,
});

User.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true, unique: true },
	phone: { type: String, width: 'short' },
	photo: { type: Types.CloudinaryImage, collapse: true },
	password: { type: Types.Password, initial: true, required: false },
}, 'Permissions', {
	isProtected: { type: Boolean, noedit: false },
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
	return true;
});

User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });

User.schema.methods.wasActive = function () {
	this.lastActiveOn = new Date();
	return this;
}

User.track = true;
User.defaultColumns = 'name, email, phone, photo';
User.register();
