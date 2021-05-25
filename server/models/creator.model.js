const mongoose = require('mongoose');
const { data } = require("./../data");
const { Schema } = mongoose;
const {creators} = require("./../data");


const CreatorSchema = new Schema({
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
  })
}

module.exports = { Creator, addCreatorsToDB };