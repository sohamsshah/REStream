const express = require('express');
const router = express.Router();
const {getAllVideos, getVideo} = require("../controllers/videos")

router.get("/", getAllVideos)
router.get("/:id", getVideo);

module.exports = router;