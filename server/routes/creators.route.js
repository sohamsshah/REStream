const express = require('express');
const router = express.Router();
const { Creator } = require("./../models/creator.model");
const { Video } = require("./../models/video.model");

router.get("/", async (req, res) => {
  try {
    const creators = await Creator.find({});
    res.status(200).json({ creators, success: true, message: "Successful" })
  } catch (error) {
    res.status(404).json({ success: false, message: "Error while retrieving creators", errorMessage: error.message })
  }
})

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id)
  let creator = await Creator.findById(id);
  let videos = await Video.find({creator_id: id});
  if (creator && videos) {
    return res.status(200).json({ videos, creator, success: true, message: "Successful" })
  } res.status(404).json({ success: false, message: "The creator ID sent has no creator associated with it. Check and try again" })
});

module.exports = router;