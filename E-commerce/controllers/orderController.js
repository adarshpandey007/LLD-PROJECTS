const orderService = require('../services/orderService');

exports.placeOrder = async(req, res) => {
  try {
    const { userId, productId, quantity, amount ,status} = req.body;
    const order =await  orderService.placeOrder(userId, productId,amount, quantity, status);
    console.log("order",order);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getOrders = (req, res) => {
  res.json(orderService.getOrders());
};
