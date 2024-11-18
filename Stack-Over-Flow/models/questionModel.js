class Question {
    constructor(id, userId, title, body) {
      this.id = id;
      this.userId = userId; // Who posted the question
      this.title = title;
      this.body = body;
      this.answers = []; // List of answer IDs
      this.comments = []; // List of comment IDs
      this.createdAt = new Date();
    }
   addComment(comment){
        this.comments.push(comment);
   }
}
  
  module.exports = Question;
  