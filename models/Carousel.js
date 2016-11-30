var keystone = require('keystone');
var Types = keystone.Field.Types;

var Carousel = new keystone.List('Carousel', {
	autokey: { from: 'name', path: 'key', unique: true },
	singular: 'Image',
});

Carousel.add({
	name: { type: String, required: true },
	uploadedAt: { type: Types.Date, default: Date.now },
	image: { type: Types.CloudinaryImage },
});

Carousel.track = true;
Carousel.defaultSort = 'name';
Carousel.defaultColumns = 'name, uploadedAt, image';
Carousel.register();
