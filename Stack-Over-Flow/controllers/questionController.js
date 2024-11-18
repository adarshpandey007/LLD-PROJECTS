const questionService = require("../services/questionService");

const createQuestion = (req, res) => {
  const { userId, title, body } = req.body;

  try {
    const id = `ques-${Date.now()}`;
    const question = questionService.createQuestion(id, userId, title, body);
    res.status(201).json({ message: "Question created", question });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllQuestions = (req, res) => {
  const questions = questionService.getAllQuestions();
  res.status(200).json(questions);
};

module.exports = { createQuestion, getAllQuestions };
