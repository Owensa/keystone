var keystone = require('keystone');
var Types = keystone.Field.Types;

var MediaCategories = new keystone.List('MediaCategories', {
	autokey: { from: 'name', path: 'key', unique: true },
	label: 'Categories',
});

MediaCategories.add({
	name: { type: String, required: true },
});

MediaCategories.relationship({ ref: 'Media', refPath: 'categories' });

MediaCategories.track = true;
MediaCategories.register();