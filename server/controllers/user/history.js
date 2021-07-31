exports.getHistoryOfUser = async (req, res) => {
    const { user } = req;
    const updatedObj = await user.populate('history.videoId').execPopulate();
    return res.status(201).json({ history: updatedObj.history, success: true, message: "Success" });   
}

exports.clearHistoryOfUser = async (req, res) => {
    const { user } = req;
    user.history = []
    const savedUser = await user.save()
    return res.status(201).json({ success: true, message: "Successful" });   
}

exports.addVideoToHistoryOfUser = async (req, res) => {
    const { user } = req;
    const { videoId } = req.params;
    console.log(videoId);
    user.history.push({ videoId: videoId });
    const savedUser = await user.save();
    const updatedObj = await savedUser.populate('history.videoId').execPopulate();
    console.log(updatedObj);
    const addedVideo = updatedObj.history.find(item => item.videoId._id == videoId);
    return res.status(201).json({ addedVideo: addedVideo, success: true, message: "Successful" });   
}

exports.removeVideoFromHistoryOfUser = async (req, res) => {
    const { user } = req;
    const { videoId } = req.params;

    const video = user.history.find(item => item.videoId == videoId)
    if (video) {
      const updatedObj = await user.populate('history.videoId').execPopulate();
      const removedVideo = updatedObj.history.find(item => item.videoId._id == videoId);
      user.history.pull({ _id: video._id });
      const savedUser = await user.save();
      return res.status(201).json({ removedVideo, success: true, message: "Successful" });
    } else {
      return res.status(404).json({ success: false, message: "The creator id you requested doesn't exists" });
    }   
}