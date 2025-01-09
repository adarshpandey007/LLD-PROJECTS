class bookingModel{
    constructor(bookingId,trainId,source,destination,date){
        this.bookingId = bookingId,
        this.trainId = trainId,
        this.source = source, 
        this.destination = destination,
        this.date = date,
        this.createdAt = new Date()
    }
}
module.exports = bookingModel;