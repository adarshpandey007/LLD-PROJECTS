class Booking {
    constructor(bookingId, userId, roomId, startDate, endDate, status = "Reserved") {
        this.bookingId = bookingId;
        this.userId = userId;
        this.roomId = roomId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status; // "Reserved", "CheckedIn", "CheckedOut", "Cancelled"
    }
}

module.exports = Booking;
