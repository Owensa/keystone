var keystone = require('keystone');
var Types = keystone.Field.Types;

var MusicCategories = new keystone.List('MusicCategories', {
	autokey: { from: 'name', path: 'key', unique: true },
	label: 'Categories',
});

MusicCategories.add({
	name: { type: String, required: true },
});

MusicCategories.relationship({ ref: 'Music', refPath: 'categories' });

MusicCategories.track = true;
MusicCategories.register();