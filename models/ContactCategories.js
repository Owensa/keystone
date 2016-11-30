var keystone = require('keystone');
var Types = keystone.Field.Types;

var ContactCategories = new keystone.List('ContactCategories', {
	autokey: { from: 'name', path: 'key', unique: true },
	label: 'Categories',
});

ContactCategories.add({
	name: { type: String, required: true },
});

ContactCategories.relationship({ ref: 'Contact', refPath: 'categories' });

ContactCategories.track = true;
ContactCategories.register();