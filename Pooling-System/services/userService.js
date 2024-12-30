const User = require('../models/user');

const users = {}; // In-memory storage for users

const createUser = (id, name) => {
    if (users[id]) {
        throw new Error('User already exists');
    }
    const user = new User(id, name);
    users[id] = user;
    return user;
};

const getUserById = (id) => {
    return users[id] || null;
};

module.exports = {
    createUser,
    getUserById,
};
