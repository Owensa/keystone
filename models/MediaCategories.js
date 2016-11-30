var keystone = require('keystone');
var Types = keystone.Field.Types;

var MediaCategories = new keystone.List('MediaCategories', {
});

MediaCategories.add({
	name: { type: String, required: true },
});


MediaCategories.track = true;
MediaCategories.register();
