const express = require('express');
const router = express.Router();
const { extend } = require("lodash");
const {getUserById} = require("../controllers/params")
const {getPlaylistsOfUser, createPlaylistOfUser, updatePlaylistOfUser, deletePlaylistOfUser, addVideoToPlaylistOfUser, deleteVideoFromPlaylistOfUser} = require("../controllers/user/playlist");
const {getDetailsOfAllUsers, getDetailsOfUser} = require("../controllers/user/auth");
const {getLikedVideosOfUser, addVideoToLikedVideosOfUser, removeVideoFromLikedVideosOfUser} = require("../controllers/user/like");
const {getHistoryOfUser, clearHistoryOfUser, addVideoToHistoryOfUser, removeVideoFromHistoryOfUser} = require("../controllers/user/history")
const {addCreatorToFollowingOfUser, removeCreatorFromFollowingOfUser} = require("../controllers/user/following")

router.get("/", getDetailsOfAllUsers)

router.param("userId", getUserById)

router.route("/:userId")
.get(getDetailsOfUser);

router.route("/:userId/likedVideos")
.get(getLikedVideosOfUser)
.post(addVideoToLikedVideosOfUser) 

router.route("/:userId/likedVideos/:videoId")
.delete(removeVideoFromLikedVideosOfUser) 

router.route('/:userId/playlists')
  .get(getPlaylistsOfUser)
  .post(createPlaylistOfUser);

router.route('/:userId/playlists/:playlistId')
  .post(updatePlaylistOfUser)
  .delete(deletePlaylistOfUser)

router.route('/:userId/playlists/:playlistId/:videoId')
  .post(addVideoToPlaylistOfUser)
  .delete(deleteVideoFromPlaylistOfUser);

router.route('/:userId/follow/:creatorId')
.post(addCreatorToFollowingOfUser)
.delete(removeCreatorFromFollowingOfUser);

router.route('/:userId/history')
.get(getHistoryOfUser)
.delete(clearHistoryOfUser)

router.route('/:userId/history/:videoId')
.post(addVideoToHistoryOfUser)
.delete(removeVideoFromHistoryOfUser)

module.exports = router;