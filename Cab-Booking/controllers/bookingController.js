const bookingService = require("../services/bookingService");

exports.createBooking = (req, res) => {
    try {
        const userId = req.body.userId;
        const pickupLocation = req.body.pickupLocation;
        const dropLocation = req.body.dropLocation;
        const booking = bookingService.createBooking(userId, pickupLocation, dropLocation);
        res.status(201).json(booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.cancelBooking = (req,res)=>{
    try {
        const booking = bookingService.cancelBooking(req.body);
        res.status(200).json(booking);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

exports.completeBooking = (req,res)=>{
    try {
       const bookingId = req.params.bookingId;
        const booking = bookingService.completeBooking(bookingId);
        res.status(200).json(booking);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}
