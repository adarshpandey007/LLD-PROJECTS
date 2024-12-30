const Booking = require("../models/bookingModel");
const cabService = require("./cabService");

const bookings = {}; // In-memory storage

const createBooking = (userId, pickupLocation, dropLocation) => {
  const availableCab = cabService.getAvailableCabs(pickupLocation);

  if (!availableCab) throw new Error("No cabs available");
  const price = "1000";
  const bookingId = `booking-${Date.now()}`;

  const booking = new Booking(
    bookingId,
    userId,
    availableCab.cabId,
    pickupLocation,
    dropLocation,
    price
  );

  bookings[bookingId] = booking;
  cabService.toggleCabAvailability(availableCab.cabId, false);
  return booking;
};

const completeBooking = (id) => {
  if (!bookings[id]) throw new Error("Booking not found");
  const booking = bookings[id];
  booking.status = "completed";
  cabService.toggleCabAvailability(booking.cabId, true);
  return booking;
};

const getBookingsByUser = (userId) => {
    if (typeof bookings !== "object") {
        throw new TypeError("bookings is not an object");
    }
    // Extract all booking objects and filter by userId
    const userBookings = Object.values(bookings).filter(
        (booking) => booking.userId === userId
    );

    return userBookings;
};


module.exports = { createBooking, completeBooking,getBookingsByUser };
