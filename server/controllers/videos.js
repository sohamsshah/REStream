const { Video } = require("./../models/video.model");

exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.status(200).json({ videos, success: true, message: "Successful" })
  } catch (error) {
    res.status(404).json({ success: false, message: "Error while retrieving videos", errorMessage: error.message })
  }
}

exports.getVideo = async (req, res) => {
  const { id } = req.params;
  let video = await Video.findById(id);
  const populatedVideo = await video.populate('creator_id').execPopulate();
  if (video) {
    return res.status(200).json({ video: populatedVideo, success: true, message: "Successful" })
  } 
  res.status(404).json({ success: false, message: "The video ID sent has no video associated with it. Check and try again" })

}