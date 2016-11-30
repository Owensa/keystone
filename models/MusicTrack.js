var keystone = require('keystone');
var Types = keystone.Field.Types;

var MusicTrack = new keystone.List('MusicTrack', {
	autokey: { from: 'name', path: 'key', unique: true },
	plural: 'Albums',
	singular: 'Album',
});

MusicTrack.add({
	name: { type: String, required: true },
	publishedDate: { type: Types.Date, default: Date.now },
	images: { type: Types.CloudinaryImages },
});

MusicTrack.track = true;
MusicTrack.defaultSort = 'name';
MusicTrack.defaultColumns = 'name, publishedDate';
MusicTrack.register();