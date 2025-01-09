class trainModel{
    constructor(trainId,trainName,dateSchedules,stations,seats){
        this.trainId = trainId,
        this.trainName = trainName,
        this.dateSchedules = dateSchedules, 
        this.stations = stations,
        this.seats = seats
    }
}
module.exports = trainModel;