var keystone = require('keystone');
var Types = keystone.Field.Types;

var Media = new keystone.List('Media', {
	autokey: { from: 'name', path: 'key', unique: true },
	plural: 'Albums',
	singular: 'Album',
});

Media.add({
	name: { type: String, required: true },
  content: { type: String },
  bgImgUrl:  { type: String },
  title: { type: String },
  catalog: { type: String},
  photos: {type: Types.CloudinaryImage  },
  previewImgUrl: { type: String },
  items: { type: String },
  imgSrc: { type: Types.CloudinaryImage },
  psTitle: { type: String },
  videos: { type: String },
  previewImgUrl: { type: String },
  youtubeIDS: { type: String },
});

Media.track = true;
Media.defaultSort = 'name';
Media.defaultColumns = 'name, publishedDate';
Media.register();
