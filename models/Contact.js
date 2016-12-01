var keystone = require('keystone');
var Types = keystone.Field.Types;

var Contact = new keystone.List('Contact', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Contact.add({
	name: { type: String, required: true },
	path: { type: String, required: false },
	content: { type: String },
	bgImgUrl: { type: Types.Html, wysiwyg: true, height: 150 },
	contacts: { type: Types.Html, wysiwyg: true, height: 400 },
	title: { type: String },
	lines: { type: String },
	emails: { type: String }
});

Contact.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Contact.track = true;
Contact.defaultColumns = 'name, content, path';
Contact.register();
