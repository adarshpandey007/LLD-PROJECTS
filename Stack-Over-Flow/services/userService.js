const User = require("../models/userModel");

const users = {}; // In-memory storage

const createUser = (id, name) => {
  if (users[id]) throw new Error("User already exists");
  const user = new User(id, name);
  users[id] = user;
  return user;
};

const getUserById = (id) => users[id];

module.exports = { createUser, getUserById };
