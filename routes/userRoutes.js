const express = require("express");
const router = express.Router();
const { enrichUserProfile } = require("../controllers/userController");

router.post("/enrich", enrichUserProfile);

module.exports = router;
