const express = require('express');
const router = express.Router();
const { UserCredential } = require("./../models/userCredentials.model");
const { UserDetail } = require('./../models/userDetails.model');

router.get("/", async (req, res) => {
  const users = await UserCredential.find({});
  res.json({ users, success: true })
});

const findUserByUserName = (username) => {
  return UserCredential.findOne({ username: new RegExp('^' + username + '$', "i") }, function(err, user) {
    if (err) return console.log(err);
  })
};

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await findUserByUserName(username);
  console.log("hello");
  
  if (user) {
    if (user.password && user.password === password) {
      // console.log(user._id);
      // const userFromDB = await UserDetail.findById(user._id);
      // console.log(userFromDB);
      // console.log(user);
      // const updatedUser = await userFromDB.populate('likedVideos.videoId').execPopulate();
      
      // console.log("-----------------")
      

      return res.status(200).json({ user, success: true, message: "Login Successful" })

    } res.status(403).json({ success: false, message: "Wrong Password. Enter correct password" })
  } res.status(404).json({ success: false, message: "User not found. Check your user credentials" })
})

router.post("/signup", async (req, res) => {
  const { username, password, email } = req.body;
  const userName = await findUserByUserName(username);
  if (userName === null) {
    try {
      const NewUser = new UserCredential({ username, password, email });
      const savedUser = await NewUser.save();
      const NewUserDetail = new UserDetail({
        _id: NewUser._id,
        playlists: [
          {
            name: 'Watch Later',
            videos: []
          }
        ]
      });
      const savedUserDetails = await NewUserDetail.save();
      return res.status(201).json({ user: savedUser, success: true, message: "Sign Up Successful" })
    } catch (error) {
      return res.status(401).json({ success: false, message: "Error while adding user" })
    }
  } return res.status(409).json({ success: false, message: "User Already Exists" })
})

module.exports = router;