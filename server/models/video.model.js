const mongoose = require('mongoose');
const { videos } = require("./../data");
const { Schema } = mongoose;

const VideoSchema = new Schema({
  _id: String,
  thumbnail: String,
  name: String,
  category_name: String,
  creator_id: { type: Schema.Types.ObjectId, ref: 'Creator' },

});

const Video = mongoose.model('Video', VideoSchema);

const addVideosToDB = () => {
  videos.forEach(async (video) => {
    const NewVideo = new Video(video);
    const savedVideo = await NewVideo.save();
  })
}

module.exports = { Video, addVideosToDB };