const express = require('express');
trainCont = require('../controllers/trainController');
bookingCont = require('../controllers/bookingController');


const router = express.Router();

router.post('/bookingtrain',bookingCont.bookTrain);
router.post('/addTrain',trainCont.addTrain);
// router.get('/available',trainCont.getAvailableTrains);

module.exports = router;