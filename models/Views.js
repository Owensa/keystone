var keystone = require('keystone');
var Types = keystone.Field.Types;

var Views = new keystone.List('Views', {
	autokey: { from: 'name', path: 'key', unique: true },
	singular: 'View',
});

Views.add({
	name: { type: String, required: true },
	home: { type: String },
  media: { type: String },
  timeline: { type: String },
  music: { type: String },
  contact: { type: String },
  lastUpdated: { type: Types.Date, default: Date.now },
});

Views.track = true;
Views.defaultSort = 'name';
Views.defaultColumns = 'name, home, media, timeline, music, contact';
Views.register();
