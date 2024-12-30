class Cab {
    constructor(cabId, type,locX,locY,carno) {
        this.cabId = cabId;
        this.type = type;
        this.location = {locX,locY};
        this.isAvailable = true;
        this.carNo = carno;
    }

    isAvailable(){
        return this.isAvailable;
    }
}

module.exports = Cab;
