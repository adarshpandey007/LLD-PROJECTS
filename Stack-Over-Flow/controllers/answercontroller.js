const answerService = require("../services/answerService");

const createAnswer = (req, res) => {
  const { questionId, userId, body } = req.body;

  try {
    const id = `ans-${Date.now()}`;
    const answer = answerService.createAnswer(id, questionId, userId, body);
    res.status(201).json({ message: "Answer created", answer });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAnswersByQuestionId = (req, res)=>{
    try {
        const quesId = req.params.quesId;
        const answers = answerService.getAnswersByQuestionId(quesId);
        res.status(201).json({ message: "Answers Fetched", answers });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { createAnswer,getAnswersByQuestionId };
