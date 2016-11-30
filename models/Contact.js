var keystone = require('keystone');
var Types = keystone.Field.Types;

var Contact = new keystone.List('Contact', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Contact.add({
	name: { type: String, required: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true },
	image: { type: Types.CloudinaryImage },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	categories: { type: Types.Relationship, ref: 'ContactCategories', many: true },
});

Contact.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Contact.track = true;
Contact.defaultColumns = 'name, state|20%, author|20%, publishedDate|20%';
Contact.register();