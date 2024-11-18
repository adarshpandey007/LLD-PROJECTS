class Comment {
    constructor(id, parentId,commentOn, userId, body) {
      this.id = id;
      this.parentId = parentId; // Associated question/answer ID
      this.commentOn=commentOn;
      this.userId = userId; // Who posted the comment
      this.body = body;
      this.createdAt = new Date();
    }
  }
  
  module.exports = Comment;
  