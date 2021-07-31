const { UserCredential } = require("../../models/userCredentials.model");
const { UserDetail } = require('../../models/userDetails.model');

const findUserByUserName = (username) => {
  return UserCredential.findOne({ username: new RegExp('^' + username + '$', "i") }, function(err, user) {
    if (err) return console.log(err);
  })
};

exports.getAllUserCredentials = async (req, res) => {
  const users = await UserCredential.find({});
  res.json({ users, success: true })
}

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await findUserByUserName(username);
  console.log(username);
  if (user) {
    if (user.password && user.password === password) {
      return res.status(200).json({ user, success: true, message: "Login Successful" })

    } res.status(403).json({ success: false, message: "Wrong Password. Enter correct password" })
  } res.status(404).json({ success: false, message: "User not found. Check your user credentials" })
}

exports.signupUser = async (req, res) => {
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
}

exports.getDetailsOfUser = async (req, res) => {
    const { user } = req;
    const updatedUser = await user.populate('likedVideos.videoId').populate('playlists.videos.videoId').populate('following.creatorId').populate('history.videoId').execPopulate()
    return res.json({ user: updatedUser, success: true, message: "Success" })}

exports.getDetailsOfAllUsers = async (req, res) => {
  try {
    const userDetails = await UserDetail.find({});
    res.status(200).json({ userDetails, success: true, message: "Successful" })
  } catch (error) {
    res.status(404).json({ success: false, message: "Error while retrieving details", errorMessage: error.message })
  }
}
