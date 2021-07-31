exports.getLikedVideosOfUser = async (req, res) => {
    const { user } = req;
    const updatedObj = await user.populate('likedVideos.videoId').execPopulate();
    return res.json({ likedVideos: updatedObj.likedVideos, success: true })}

exports.addVideoToLikedVideosOfUser = async (req, res) => {
    const { user } = req;
    const video = req.body;
    user.likedVideos.push({ videoId: video.videoId });
    const savedUser = await user.save();
    const updatedObj = await savedUser.populate('likedVideos.videoId').execPopulate();

    const newVideo = updatedObj.likedVideos.find(item => item.videoId._id == video.videoId)

    return res.status(201).json({ addedVideo: newVideo, success: true, message: "Success" });
}

exports.removeVideoFromLikedVideosOfUser = async (req, res) => {
    const { user } = req;
    const {videoId} = req.params;
    
    const video = user.likedVideos.find(item => item.videoId == videoId)
    if (video) {
      const updatedObj = await user.populate('likedVideos.videoId').execPopulate();

      user.likedVideos.pull({ _id: video._id });
      const savedUser = await user.save();

      return res.status(201).json({ success: true, message: "Success" });
    } else {
      return res.status(404).json({ success: false, message: "The video id you requested doesn't exists" });
    }
  }