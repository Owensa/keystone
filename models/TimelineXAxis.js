var keystone = require('keystone');
var Types = keystone.Field.Types;

var TimelineXAxis = new keystone.List('TimelineXAxis', {
	autokey: { from: 'name', path: 'key', unique: true },
	plural: 'Albums',
	singular: 'Album',
});

TimelineXAxis.add({
	name: { type: String, required: true },
	publishedDate: { type: Types.Date, default: Date.now },
	images: { type: Types.CloudinaryImages },
});

TimelineXAxis.track = true;
TimelineXAxis.defaultSort = 'name';
TimelineXAxis.defaultColumns = 'name, publishedDate';
TimelineXAxis.register();