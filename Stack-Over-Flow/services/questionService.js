const Question = require("../models/questionModel");

const questions = {}; // In-memory storage

const createQuestion = (id, userId, title, body) => {
  if (questions[id]) throw new Error("Question already exists");
  const question = new Question(id, userId, title, body);
  questions[id] = question;
  return question;
};

const getQuestionById = (id) => questions[id];
const getAllQuestions = () => Object.values(questions);

module.exports = { createQuestion, getQuestionById, getAllQuestions };
