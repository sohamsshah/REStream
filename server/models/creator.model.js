const mongoose = require('mongoose');
const { data } = require("./../data");
const { Schema } = mongoose;
const {creators} = require("./../data");


const CreatorSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  thumbnail: String,
  redirect: String,
  isChannel: Boolean,
  name: String,
  description: String,
});

const Creator = mongoose.model('Creator', CreatorSchema);


const addCreatorsToDB = () => {
  creators.forEach(async (creator) => {
    const NewCreator = new Creator(creator);
    const savedCreator = await NewCreator.save();
    console.log(savedCreator);
  })
}

module.exports = { Creator, addCreatorsToDB };