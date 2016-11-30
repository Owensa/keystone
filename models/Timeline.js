var keystone = require('keystone');
var Types = keystone.Field.Types;

var Timeline = new keystone.List('Timeline', {
	autokey: { from: 'name', path: 'key', unique: true },
	plural: 'Albums',
	singular: 'Album',
});

Timeline.add({
	name: { type: String, required: true },
	publishedDate: { type: Types.Date, default: Date.now },
	images: { type: Types.CloudinaryImages },
});

Timeline.track = true;
Timeline.defaultSort = 'name';
Timeline.defaultColumns = 'name, publishedDate';
Timeline.register();