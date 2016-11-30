var keystone = require('keystone');
var Types = keystone.Field.Types;

var Media = new keystone.List('Media', {
	autokey: { from: 'name', path: 'key', unique: true },
	plural: 'Albums',
	singular: 'Album',
});

Media.add({
	name: { type: String, required: true },
	publishedDate: { type: Types.Date, default: Date.now },
	images: { type: Types.CloudinaryImages },
});

Media.track = true;
Media.defaultSort = 'name';
Media.defaultColumns = 'name, publishedDate';
Media.register();