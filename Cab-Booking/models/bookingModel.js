class Booking {
    constructor(bookingId, userId, cabId, pickupLocation, dropLocation,price) {
        this.bookingId = bookingId;
        this.userId = userId;
        this.cabId = cabId;
        this.pickupLocation = pickupLocation; // { x: Number, y: Number }
        this.dropLocation = dropLocation; // { x: Number, y: Number }
        this.status = "ongoing"; // "ongoing" or "completed"
        this.price = price;
        this.createdAt = new Date();
    }
}

module.exports = Booking;
