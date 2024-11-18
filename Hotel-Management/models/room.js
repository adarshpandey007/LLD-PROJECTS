class Room {
    constructor(roomId, roomType, price) {
        this.roomId = roomId;
        this.roomType = roomType; // Example: "Single", "Double", "Suite"
        this.price = price;
        this.isAvailable = true;
    }

    isAvailable(){
        return this.isAvailable;
    }
}

module.exports = Room;
