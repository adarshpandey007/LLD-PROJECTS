const User = require("../models/user");
const users = []; // In-memory storage

exports.addUser = (userData) => {
    let userId = `user-${Date.now()}`;
    while(users[userId]){
        userId = `user-${Date.now()}`;
    }
    const user = new User(userId, userData.name, userData.email, userData.phone);
    users.push(user);
    return user;
};

exports.getUserById = (userId) => users.find((user) => user.userId === userId);
