const Order = require('../models/orderModel');

class OrderService {
  constructor() {
    this.orders = [];
  }

  async placeOrder(userId, productId, amount, quantity, status) {
    // Dynamically import userService to avoid circular dependency
    const userService = require('./userServices');
    const productService = require('./productService');

    const user = await userService.getUserById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    const userPincode = user.user_pincode;
    console.log("userdata",user);
    if (!productService.isDeliverable(productId, String(userPincode))) {
      throw new Error('Product not deliverable to this pincode');
    }
    console.log("reach1");

    let orderId = `order-${Date.now()}`;
    while (this.orders.find((order) => order.id === orderId)) {
      orderId = `order-${Date.now()}`;
    }
    console.log("reach2");

    const order = new Order(orderId, productId, userId, amount, quantity, status);
    console.log("orders",order);
    this.orders.push(order);
    return order;
  }

  getOrders() {
    return this.orders;
  }

  getOrdersByUserId(userId) {
    return this.orders.filter((order) => order.userId === userId);
  }
}

module.exports = new OrderService();
