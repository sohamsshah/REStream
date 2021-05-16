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
    await user.save();
    const newVideo = user.likedVideos.find(item => item.videoId == video.videoId)
    return res.status(201).json({ addedVideo: newVideo, success: true, message: "Successful" });
  })   

module.exports = router;