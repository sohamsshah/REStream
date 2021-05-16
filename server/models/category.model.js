const { Schema } = mongoose;

const CategorySchema = new Schema({
  thumbnail: String,
  redirect: String,
  category_name: String,
  name: String,
  description: String,
  tags: Array,
});

const Category = mongoose.model('Category', CategorySchema);

// const addVideosToDB = () => {
//   videos.forEach(async (video) => {
//     const NewVideo = new Video(video);
//     const savedVideo = await NewVideo.save();
//     console.log(savedVideo);
//   })
// }

module.exports = { Creator, addVideosToDB };