const Poll = require('../models/pool');

const polls = {}; // In-memory storage for polls

const createPoll = (id, question, options, createdBy, expiryDate) => {
    const poll = new Poll(id, question, options, createdBy, expiryDate);
    polls[id] = poll;
    return poll;
};

const voteOnPoll = (pollId, userId, selectedOption) => {
    const poll = polls[pollId];
    if (!poll) {
        throw new Error('Poll not found');
    }

    if (poll.isExpired()) {
        throw new Error('Poll has expired');
    }

    const option = poll.options.find(opt => opt.option === selectedOption);
    if (!option) {
        throw new Error('Invalid option selected');
    }

    poll.responses.push({ userId, selectedOption });
    option.votes += 1;
    return poll;
};

const getPollResults = (pollId) => {
    const poll = polls[pollId];
    if (!poll) {
        throw new Error('Poll not found');
    }

    return {
        question: poll.question,
        options: poll.options,
        totalResponses: poll.responses.length,
    };
};

module.exports = {
    createPoll,
    voteOnPoll,
    getPollResults,
};
