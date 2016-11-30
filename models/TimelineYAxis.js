var keystone = require('keystone');
var Types = keystone.Field.Types;

var TimelineYAxis = new keystone.List('TimelineYAxis', {
	autokey: { from: 'name', path: 'key', unique: true },
	plural: 'Albums',
	singular: 'Album',
});

TimelineYAxis.add({
	name: { type: String, required: true },
	publishedDate: { type: Types.Date, default: Date.now },
	images: { type: Types.CloudinaryImages },
});

TimelineYAxis.track = true;
TimelineYAxis.defaultSort = 'name';
TimelineYAxis.defaultColumns = 'name, publishedDate';
TimelineYAxis.register();