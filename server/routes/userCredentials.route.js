const express = require('express');
const router = express.Router();

const {getAllUserCredentials, loginUser, signupUser} = require("../controllers/user/auth")

router.get("/", getAllUserCredentials);
router.post("/login", loginUser)
router.post("/signup", signupUser)

module.exports = router;