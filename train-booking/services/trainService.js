const trainModel = require('../models/trainModel');

const trains = {};

const addTrain = (trainName,dateSchedules,stations,seats) =>{
    let trainId = `train-${Date.now()}`;
    while(trains[trainId]){
        trainId = `train-${Date.now()}`;
    };
    const train = new trainModel(trainId,trainName,dateSchedules,stations,seats);
    trains[trainId]=train;
    return train;
};

const checkTrainAvailability = (trainId,travelDate)=>{
    if(trains[trainId]){
        const currentTrain = trains[trainId];
        if(currentTrain.seats >1 && currentTrain.dateSchedules.includes(travelDate)){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

module.exports ={addTrain,checkTrainAvailability};

