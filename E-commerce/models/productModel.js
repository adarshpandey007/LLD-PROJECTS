class Product{
    constructor(id , name , price , quantity ,pincodes){
        this.id = id,
        this.name = name,
        this.price = price,
        this.quantity = quantity,
        // this.manufacturingPincode = pincode
        this.deliverablePincodes= pincodes
    }
}

module.exports = Product;