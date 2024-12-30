const express = require("express");
const bookingController = require("../controllers/bookingController");

const router = express.Router();

router.post("/confirm", bookingController.createBooking);
router.post("/cancel", bookingController.cancelBooking);
router.post("/complete/:bookingId",bookingController.completeBooking);

module.exports = router;
