const cabService = require("../services/cabService");

exports.addCab = (req, res) => {
    const room = cabService.addCab(req.body);
    res.status(201).json(room);
};

exports.getAllCabs = (req, res) => {
    const cabs = cabService.getAllCabs();
    res.status(200).json(cabs);
};

exports.getAvailableCabs = (req, res) => {
    const availableRooms = cabService.getAvailableCabs(req.body.user_location);
    res.status(200).json(availableRooms);
};
