class User {
    constructor(id, name) {
      this.id = id;
      this.name = name;
      this.questions = []; // List of question IDs posted by the user
      this.answers = []; // List of answer IDs posted by the user
    }
  }
  
  module.exports = User;
  