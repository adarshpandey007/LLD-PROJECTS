const express = require("express");
const { createAnswer ,getAnswersByQuestionId} = require("../controllers/answercontroller");

const router = express.Router();

router.post("/", createAnswer);
router.get("/:quesId",getAnswersByQuestionId);

module.exports = router;
