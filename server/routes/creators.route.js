const express = require('express');
const router = express.Router();
const {getAllCreators, getCreator} = require("../controllers/creators")

router.get("/", getAllCreators)
router.get("/:id", getCreator);

module.exports = router;