const Answer = require("../models/answerModel");

const answers = {}; // In-memory storage

const createAnswer = (id, questionId, userId, body) => {
  if (answers[id]) throw new Error("Answer already exists");
  const answer = new Answer(id, questionId, userId, body);
  answers[id] = answer;
  return answer;
};

const getAnswersByQuestionId = (questionId) =>
  Object.values(answers).filter((answer) => answer.questionId === questionId);

const getAnswerById=(id)=>answers[id];

module.exports = { createAnswer, getAnswersByQuestionId ,getAnswerById};
