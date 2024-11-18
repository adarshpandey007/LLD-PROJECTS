class Payment {
    constructor(paymentId, bookingId, amount, paymentMethod, status = "Pending") {
        this.paymentId = paymentId;
        this.bookingId = bookingId;
        this.amount = amount;
        this.paymentMethod = paymentMethod; // "Card", "UPI", "Cash"
        this.status = status; // "Pending", "Completed", "Refunded"
    }
}

module.exports = Payment;
