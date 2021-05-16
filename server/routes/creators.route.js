const express = require('express');
const router = express.Router();
const { Creator } = require("./../models/creator.model");

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
  let creator = await Creator.findById(id);
  creator.__v = undefined;
  if (creator) {
    return res.status(200).json({ creator, success: true, message: "Successful" })
  } res.status(404).json({ success: false, message: "The creator ID sent has no creator associated with it. Check and try again" })
});

module.exports = router;