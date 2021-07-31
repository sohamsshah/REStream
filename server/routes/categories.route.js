const express = require('express');
const router = express.Router();
const { getAllCategories, getCategory } = require('../controllers/category');

router.get("/", getAllCategories)
router.get("/:category_name", getCategory);

module.exports = router;