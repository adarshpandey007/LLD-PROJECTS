const trainService  = require('../services/trainService');

exports.addTrain = (req,res)=>{
    try {
        const {trainName,dateSchedules,stations,seats} = req.body;
        const train = trainService.addTrain(trainName,dateSchedules,stations,seats);
        res.status(201).json(train);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}
