var keystone = require('keystone');
var Types = keystone.Field.Types;

var Music = new keystone.List('Music', {
	autokey: { from: 'name', path: 'key', unique: true },
	plural: 'Albums',
	singular: 'Album',
});

Music.add({
	name: { type: String, required: true },
	publishedDate: { type: Types.Date, default: Date.now },
	images: { type: Types.CloudinaryImages },
});

Music.track = true;
Music.defaultSort = 'name';
Music.defaultColumns = 'name, publishedDate';
Music.register();