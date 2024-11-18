const roomService = require("../services/roomService");

exports.addRoom = (req, res) => {
    const room = roomService.addRoom(req.body);
    res.status(201).json(room);
};

exports.getAllRooms = (req, res) => {
    const rooms = roomService.getAllRooms();
    res.status(200).json(rooms);
};

exports.getAvailableRooms = (req, res) => {
    const availableRooms = roomService.getAvailableRooms();
    res.status(200).json(availableRooms);
};
