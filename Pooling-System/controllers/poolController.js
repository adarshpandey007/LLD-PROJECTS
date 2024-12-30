const pollService = require('../services/poolService');
const userService = require('../services/userService');

exports.createPoll = (req, res) => {
    try {
        const { question, options, createdBy, expiryDate } = req.body;
        const user = userService.getUserById(createdBy);
        const id = `poll-${Date.now()}`;
        const poll = pollService.createPoll(id, question, options, createdBy, new Date(expiryDate));
        // Add the poll ID to the user's created polls list
        user.pollsCreated.push(id);
        res.status(201).json(poll);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.voteOnPoll = (req, res) => {
    try {
        const { pollId, userId, selectedOption } = req.body;
        const poll = pollService.voteOnPoll(pollId, userId, selectedOption);
        res.status(200).json(poll);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getPollResults = (req, res) => {
    try {
        const { pollId } = req.params;
        const results = pollService.getPollResults(pollId);
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
