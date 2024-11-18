const bookingService = require("../services/bookingService");

exports.createBooking = (req, res) => {
    try {
        const booking = bookingService.createBooking(req.body);
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
