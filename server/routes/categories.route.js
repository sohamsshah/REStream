const express = require('express');
const router = express.Router();
const { Category } = require("./../models/category.model");
const { Video } = require("./../models/video.model");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({ categories, success: true, message: "Successful" })
  } catch (error) {
    res.status(404).json({ success: false, message: "Error while retrieving categories", errorMessage: error.message })
  }
})

router.get("/:category_name", async (req, res) => {
  const  {category_name}  = req.params;
  const category = await Category.find({category_name: category_name});
  let videos = await Video.find({category_name: category_name});
  if (videos && category) {
    return res.status(200).json({ category, videos, success: true, message: "Successful" })
  } res.status(404).json({ success: false, message: "The video ID sent has no video associated with it. Check and try again" })
});

module.exports = router;