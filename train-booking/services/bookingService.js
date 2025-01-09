const bookingModel = require('../models/bookingModel');

const bookings = {};

const booktrain = (trainId, source, destination, date) =>{
    let bookingId = `booking-${Date.now()}`;
    while(bookings[bookingId]){
        bookingId = `booking-${Date.now()}`;
    };
    const booking = new bookingModel(bookingId,trainId,source,destination,date);
    bookings[bookingId]=booking;
    return booking;
}


module.exports = {booktrain};
