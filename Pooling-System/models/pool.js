class Poll {
    constructor(id, question, options, createdBy, expiryDate) {
        this.id = id;
        this.question = question;
        this.options = options.map(option => ({ option, votes: 0 }));
        this.createdBy = createdBy; // User ID
        this.expiryDate = expiryDate;
        this.responses = []; // { userId, selectedOption }
    }

    isExpired() {
        return new Date() > this.expiryDate;
    }
}

module.exports = Poll;
