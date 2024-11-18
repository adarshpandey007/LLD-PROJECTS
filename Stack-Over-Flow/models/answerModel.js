class Answer {
    constructor(id, questionId, userId, body) {
      this.id = id;
      this.questionId = questionId; // Associated question ID
      this.userId = userId; // Who posted the answer
      this.body = body;
      this.comments = []; // List of comment IDs
      this.createdAt = new Date();
    }

    addComment(comment){
        this.comments.push(comment);
    }
  }
  
  module.exports = Answer;
  