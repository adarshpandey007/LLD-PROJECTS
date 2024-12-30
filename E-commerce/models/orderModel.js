class Order{
    constructor(id, pId , uId , amount ,quantity, status = 'pending'){
        this.orderId = id,
        this.pId = pId,
        this.uId = uId,
        this.amount = amount,
        this.quantity = quantity,
        this.status = status
    }
}

module.exports = Order;