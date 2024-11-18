const Comment = require("../models/commentModel");
const questionSer = require("./questionService");
const answerSer = require("./answerService");

const comments = {}; // In-memory storage

const createComment = (id, parentId, userId, body,commentOn) => {
  if (comments[id]) throw new Error("Comment already exists");
  const comment = new Comment(id, parentId,commentOn, userId, body);
  if(commentOn == "question"){
    // need to add the comment for question object
    const quesObj = questionSer.getQuestionById(parentId);
    quesObj.addComment(comment);
  }else if(commentOn == "answer"){
    // need to add the comment for answer object
    const ansObj = answerSer.getAnswerById(parentId);
    ansObj.addComment(comment);
  }else{
    throw new Error("mapping not done correctly");
  }
  comments[id] = comment;
  return comment;
};

module.exports = { createComment };
