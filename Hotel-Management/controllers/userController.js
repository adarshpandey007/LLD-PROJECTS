const userService = require("../services/userService");
const bookingService = require("../services/bookingService");

exports.addUser = (req, res) => {
    const user = userService.addUser(req.body);
    res.status(201).json(user);
};

exports.getAllBookings = (req,res)=>{
    const userId = req.body.userId;
    const userBookings = bookingService.getBookingsByUser(userId);
    res.status(200).json(userBookings);
}