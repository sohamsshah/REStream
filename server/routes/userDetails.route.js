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
    const updatedUser = await user.populate('likedVideos.videoId').populate('playlists.videos.videoId').execPopulate()
    return res.json({ user: updatedUser, success: true })});

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

router.route("/:userId/likedVideos/:videoId")
.delete(async (req, res) => {
    const { user } = req;
    const {videoId} = req.params;
    
    const video = user.likedVideos.find(item => item.videoId == videoId)
    if (video) {
      const updatedObj = await user.populate('likedVideos.videoId').execPopulate();

      user.likedVideos.pull({ _id: video._id });
      const savedUser = await user.save();

      return res.status(201).json({ success: true, message: "Successful" });
    } else {
      return res.status(404).json({ success: false, message: "The video id you requested doesn't exists" });
    }
  }) 

router.route('/:userId/playlists')
  .get(async (req, res) => {
    const { user } = req;
    return res.json({ playlists: user.playlists, success: true })
  })
  .post(async (req, res) => {
    const { user } = req;
    const { name } = req.body;
    user.playlists.push({ name: name, videos: [] });
    const savedUser = await user.save();
    const savedPlaylist = savedUser.playlists.find((playlist) => playlist.name === name);
    return res.status(201).json({ savedPlaylist:savedPlaylist, success: true, message: "Successful" });
  });

router.route('/:userId/playlists/:playlistId')
  .post(async (req, res) => {
    const { user } = req;
    const { playlistId } = req.params;
    const updatePlaylist = req.body;
    const playlist = user.playlists.find(item => item._id == playlistId);
    if (playlist) {
      const updatedPlaylist = extend(playlist, updatePlaylist)
      await user.save();
      return res.status(201).json({ playlists: updatedPlaylist, success: true, message: "Successful" });
    }
  })
  .delete(async (req, res) => {
    const { user } = req;
    const { playlistId } = req.params;
    const playlist = user.playlists.find(item => item._id == playlistId);
    if (playlist) {
      user.playlists.pull({ _id: playlist._id });
      await user.save();
      return res.status(200).json({ playlist: playlist, success: true, message: "Successful" });
    } else {
      return res.status(404).json({ success: false, message: "The video id you requested doesn't exists" });
    }
  })

router.route('/:userId/playlists/:playlistId/:videoId')
  .post(async (req, res) => {
    const { user } = req;
    const { playlistId, videoId } = req.params;
    const playlist = user.playlists.find(function(item){
      return item._id == playlistId;
    });

    if (playlist) {
      playlist.videos.push({videoId});
      
      const savedUser = await user.save();

      const updatedObj = await user.populate('playlists.videos.videoId').execPopulate();
      

      const addedVideo = updatedObj.playlists.find((item) => item._id == playlistId).videos.find(item => item.videoId._id == videoId)

      return res.status(201).json({ video: addedVideo, success: true, message: "Successful" });
    } else {
      return res.status(404).json({ success: false, message: "The video id you requested doesn't exists" });
    }
  })
  .delete(async (req, res) => {
    const { user } = req;
    const { playlistId, videoId } = req.params;
    const playlist = user.playlists.find(function(item){
      return item._id == playlistId});
    if(playlist){
      const updatedVideoPlaylist = playlist.videos.filter(item => item.videoId !== videoId);
      const updatedPlaylist = extend(playlist, { videos: updatedVideoPlaylist })
      await user.save();
      return res.status(201).json({ success: true, message: "Successful" });
    } else {
      return res.status(404).json({ success: false, message: "The video id you requested doesn't exists" });
    }
    
  });

router.route('/:userId/follow/:creatorId')
.post(async (req, res) => {
    const { user } = req;
    const { creatorId } = req.params;
    user.following.push({ creatorId: creatorId });
    const savedUser = await user.save();
    const updatedObj = await savedUser.populate('following.creatorId').execPopulate();
    const followedCreator = updatedObj.following.find(item => item.creatorId._id == creatorId);

    return res.status(201).json({ followedCreator, success: true, message: "Successful" }); 
    
})
.delete(async (req, res) => {
    const { user } = req;
    const { creatorId } = req.params;

    const creator = user.following.find(item => item.creatorId == creatorId)
    if (creator) {
      const updatedObj = await user.populate('following.creatorId').execPopulate();
      const unfollowedCreator = updatedObj.following.find(item => item.creatorId._id == creatorId);
      user.following.pull({ _id: creator._id });
      const savedUser = await user.save();
      return res.status(201).json({ unfollowedCreator, success: true, message: "Successful" });
    } else {
      return res.status(404).json({ success: false, message: "The creator id you requested doesn't exists" });
    }   
})
  

   

module.exports = router;