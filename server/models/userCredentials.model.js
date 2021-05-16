const mongoose = require('mongoose');
const { userCredentials } = require("../data");
const { Schema } = mongoose;

const UserCredentialSchema = new Schema({
  username: String,
  email: String,
  password: String
});

const UserCredential = mongoose.model('UserCredential', UserCredentialSchema);

const addUserCredToDB = () => {
  userCredentials.forEach(async (user) => {
    const NewUserCred = new UserCredential(user);
    const savedUserCred = await NewUserCred.save();
    console.log(savedUserCred);
  })
}

module.exports = { UserCredential, addUserCredToDB };