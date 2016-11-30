var keystone = require('keystone');
var Types = keystone.Field.Types;

var Media = new keystone.List('Media', {
	autokey: { from: 'name', path: 'key', unique: true },
	plural: 'Albums',
	singular: 'Album',
});

Media.add({
	name: { type: String, required: true },
    content: { 
        bgImgUrl:  { type: String },
        title: { type: String }, 
        catalog: { 
            photos: {
                previewImgUrl: { type: String },
                items: {
                    imgSrc: { type: Types.CloudinaryImage },
                    psTitle: { type: String },
                 }, 
            },         
        }, 
        videos: {
            previewImgUrl: { type: String },
            youtubeIDS: { initial: false },
        }     
    }
});

Media.track = true;
Media.defaultSort = 'name';
Media.defaultColumns = 'name, publishedDate';
Media.register();