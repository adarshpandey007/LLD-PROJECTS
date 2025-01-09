const bookingService = require('../services/bookingService');
const trainService = require('../services/trainService');


exports.bookTrain = (req,res)=>{
    try {
        const {trainId, source, destination, date} = req.body;
        console.log("reachd level here");
        // check availability for particular train
        if(trainId){
            console.log("reachd level 1");
            const trainAvail = trainService.checkTrainAvailability(trainId,date);
            console.log("train avail",trainAvail);
            if(trainAvail){
                console.log("reachd level 2");
                const booking = bookingService.booktrain(trainId, source, destination, date);
                res.status(201).json(booking);
            }else{
                // console.log("train avail 1");
                res.status(400).json({"error":"1"});
                // console.log("train avail 2");
            }
        }else{
            res.status(400).json({"error":error});
        }
    } catch (error) {
        res.status(400).json({"error":error});
    }
}
