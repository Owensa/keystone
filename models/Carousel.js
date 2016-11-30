var keystone = require('keystone');
var Types = keystone.Field.Types;

var Carousel = new keystone.List('Carousel', {
	autokey: { from: 'name', path: 'key', unique: true },
	plural: 'Albums',
	singular: 'Album',
});

Carousel.add({
	name: { type: String, required: true },
	publishedDate: { type: Types.Date, default: Date.now },
	images: { type: Types.CloudinaryImages },
});

Carousel.track = true;
Carousel.defaultSort = 'name';
Carousel.defaultColumns = 'name, publishedDate';
Carousel.register();