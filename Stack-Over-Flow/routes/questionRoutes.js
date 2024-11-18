const express = require("express");
const { createQuestion, getAllQuestions } = require("../controllers/questionController");

const router = express.Router();

router.post("/", createQuestion);
router.get("/", getAllQuestions);

module.exports = router;
