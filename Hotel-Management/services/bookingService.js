const Booking = require("../models/booking");
const rooms = require("./roomService");
const bookings = []; // In-memory storage

exports.createBooking = (bookingData) => {
    const roomsData = rooms.getAllRooms();
    const room = roomsData.find((room) => room.roomId === bookingData.roomId && room.isAvailable);
    if (!room) throw new Error("Room not available");

    const booking = new Booking(
        `booking-${Date.now()}`,
        bookingData.userId,
        bookingData.roomId,
        bookingData.startDate,
        bookingData.endDate
    );
    room.isAvailable = false;
    bookings.push(booking);
    return booking;
};

exports.cancelBooking=(bookingReqData)=>{
    const bookingId = bookingReqData.bookingId;
    console.log("bookings",bookings[bookingId]);
    const booking = bookings.find((booking) => booking.bookingId === bookingId);
    if (!booking) throw new Error("Booking not found");
    // Cancel the booking and mark room as available
    booking.status = "Cancelled";
    const roomsData = rooms.getAllRooms();
    const room = roomsData.find((room) => room.roomId === booking.roomId);
    if (room) room.isAvailable = true;

    return booking;
}

exports.getBookingsByUser = (userId) => bookings.filter((booking) => booking.userId === userId);
