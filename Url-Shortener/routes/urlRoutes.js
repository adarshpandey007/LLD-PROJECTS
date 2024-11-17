const express = require("express");
const router = express.Router();
const urlController = require("../controllers/urlController");
const validateUrl = require("../middlewares/validateUrl");

// Routes
router.post("/shorten", validateUrl, urlController.shortenUrl);
router.get("/:shortUrl", urlController.redirectUrl);
router.get("/", urlController.getAllUrls);

module.exports = router;
