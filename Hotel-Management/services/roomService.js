const Room = require("../models/room");
const rooms = []; // In-memory storage

exports.addRoom = (roomData) => {
    const roomId = `room-${Date.now()}`;
    const room = new Room(roomId, roomData.roomType, roomData.price);
    rooms.push(room);
    return room;
};

exports.getAllRooms = () => rooms;

exports.getAvailableRooms = () => rooms.filter((room) => room.isAvailable);
