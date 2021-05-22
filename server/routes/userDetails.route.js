const express = require('express');
const router = express.Router();
const { extend } = require("lodash");
const { UserDetail } = require("./../models/userDetails.model");

router.get("/", async (req, res) => {
  try {
    const userDetails = await UserDetail.find({});
    res.status(200).json({ userDetails, success: true, message: "Successful" })
  } catch (error) {
    res.status(404).json({ success: false, message: "Error while retrieving details", errorMessage: error.message })
  }
})

router.param("userId", async (req, res, next, userId) => {
  try {
    const user = await UserDetail.findById(userId);

    const users = await UserDetail.find({});
    
    if (!user) {
      return res.status(400).json({ success: false, message: "unable to find user" });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({ success: false, message: "unable to send user" })
  }
})

router.route("/:userId")
.get(async (req, res) => {
    const { user } = req;
    console.log(user);
    return res.json({ user, success: true })});

router.route("/:userId/likedVideos")
.get(async (req, res) => {
    const { user } = req;
    const updatedObj = await user.populate('likedVideos.videoId').execPopulate();
    return res.json({ likedVideos: updatedObj.likedVideos, success: true })})

.post(async (req, res) => {
    const { user } = req;
    const video = req.body;
    user.likedVideos.push({ videoId: video.videoId });
    const savedUser = await user.save();
    const updatedObj = await savedUser.populate('likedVideos.videoId').execPopulate();

    const newVideo = updatedObj.likedVideos.find(item => item.videoId._id == video.videoId)

    return res.status(201).json({ addedVideo: newVideo, success: true, message: "Successful" });
  }) 

.delete(async (req, res) => {
    const { user } = req;
    const body= req.body;
    const videoId = undefined;
    console.log(body);
    const video = user.likedVideos.find(item => item.videoId == videoId)
    if (video) {
      const updatedObj = await savedUser.populate('likedVideos.videoId').execPopulate();
      const deletedVideo = updatedObj.likedVideos.find(item => item.videoId._id == video.videoId)
      console.log(likedVideos);
      user.likedVideos.pull({ _id: video._id });
      const savedUser = await user.save();

      return res.status(200).json({ deletedVideo: deletedVideo, success: true, message: "Successful" });
    } else {
      return res.status(404).json({ success: false, message: "The video id you requested doesn't exists" });
    }
  })  
   

module.exports = router;