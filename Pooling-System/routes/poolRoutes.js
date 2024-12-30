const express = require('express');
const pollController = require('../controllers/poolController');
const router = express.Router();

router.post('/create', pollController.createPoll);
router.post('/vote', pollController.voteOnPoll);
router.get('/results/:pollId', pollController.getPollResults);

module.exports = router;
