var keystone = require('keystone');
var Types = keystone.Field.Types;

var MusicCategories = new keystone.List('MusicCategories', {

});

MusicCategories.add({
	name: { type: String, required: true },
});


MusicCategories.track = true;
MusicCategories.register();
