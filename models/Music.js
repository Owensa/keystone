var keystone = require('keystone');
var Types = keystone.Field.Types;

var Music = new keystone.List('Music', {
	autokey: { from: 'name', path: 'key', unique: true },
	plural: 'Music',
	singular: 'Music',
});

Music.add({
	name: { type: String, required: true },
	path: { type: String, required: false },
	content: { type: String },
	bgImgUrl: { type: Types.CloudinaryImages}
});

Music.track = true;
Music.defaultSort = 'name';
Music.defaultColumns = 'name, content, bgImgUrl';
Music.register();
