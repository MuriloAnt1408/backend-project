const User = require('../models/user.js');

let users = [
  new User(1, 'Alice', 'alice@example.com'),
  new User(2, 'Bob', 'bob@example.com'),
];

module.exports = {
  getAllUsers: () => {
    return users;
  },
  getUserById: (id) => {
    return users.find(user => user.id === id);
  },
  createUser: (name, email) => {
    const newUser = new User(users.length + 1, name, email);
    users.push(newUser);
    return newUser;
  }
};

const { getDB } = require('../config/dbConfig');

async function getAllUsers() {
  const db = getDB();
  return await db.collection('users').find({}).toArray();
}

async function getUserById(id) {
  const db = getDB();
  return await db.collection('users').findOne({ _id: id });
}

async function createUser(name, email) {
  const db = getDB();
  const result = await db.collection('users').insertOne({ name, email });
  return result.ops[0];
}

module.exports = { getAllUsers, getUserById, createUser };
