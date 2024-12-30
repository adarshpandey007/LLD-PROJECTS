const User = require('../models/userModel');
const orderService  =require('./orderService');

class UserService {
  constructor() {
    this.users = [];
  }

  addUser(name, mobile, pincode ) {
    let userId = `user-${Date.now()}`;
    while(this.users[userId]){
        userId = `user-${Date.now()}`;
    }
    const user = new User(userId,name, mobile, pincode );
    this.users.push(user);
    return user;
  }

  getUsers() {
    return this.users;
  }

  async getUserById(userId) {
    return this.users.find((user) => user.id === userId);
  }

  // Fetch orders for a specific user
  async getOrdersForUser(userId) {
    console.log("userid",userId);
    console.log("user data",Object.values(this.users));
    const user = this.users.find((u) => u.id == userId);
    if (!user) {
      throw new Error('User not found');
    }
    
    // Fetch orders for the given user ID
    const orders = await orderService.getOrdersByUserId(userId);
    return orders;
  }
}

module.exports = new UserService();
