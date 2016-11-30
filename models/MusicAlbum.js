var keystone = require('keystone');
var Types = keystone.Field.Types;

var MusicAlbum = new keystone.List('MusicAlbum', {
	autokey: { from: 'name', path: 'key', unique: true },
	plural: 'Albums',
	singular: 'Album',
});

MusicAlbum.add({
	name: { type: String, required: true },
	publishedDate: { type: Types.Date, default: Date.now },
	images: { type: Types.CloudinaryImages },
});

MusicAlbum.track = true;
MusicAlbum.defaultSort = 'name';
MusicAlbum.defaultColumns = 'name, publishedDate';
MusicAlbum.register();