var keystone = require('keystone');
var Types = keystone.Field.Types;

var Social = new keystone.List('Social', {
	autokey: { from: 'name', path: 'key', unique: true },
	singular: 'Social',
  plural: 'Social Networks'
});

Social.add({
	facebook: { type: String },
	twitter: { type: String },
  instagram: { type: String },
  snapchat: { type: String },
  tumblr: { type: String },
  youtube: { type: String },
  lastUpdated: { type: Types.Date, default: Date.now },
});

Social.track = true;
Social.defaultSort = 'lastUpdated';
Social.defaultColumns = 'facebook, twitter, instagram, snapchat, tumblr, youtube';
Social.register();
