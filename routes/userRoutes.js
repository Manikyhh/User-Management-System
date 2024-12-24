const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const usersFilePath = path.join(__dirname, '../data/users.json');

// Helper function to read users from the file
const getUsersFromFile = () => {
  const usersData = fs.readFileSync(usersFilePath);
  return JSON.parse(usersData);
};

// GET - Get all users
router.get('/', (req, res) => {
  const users = getUsersFromFile();
  res.json(users);
});

// POST - Create a new user
router.post('/', (req, res) => {
  const newUser = req.body;
  const users = getUsersFromFile();
  newUser.id = Date.now(); // Simple ID based on timestamp
  users.push(newUser);

  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
  res.status(201).json(newUser);
});

// PUT - Update an existing user
router.put('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedData = req.body;
  const users = getUsersFromFile();

  const index = users.findIndex((user) => user.id === userId);
  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users[index] = { ...users[index], ...updatedData };
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
  res.json(users[index]);
});

// DELETE - Delete a user
router.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  let users = getUsersFromFile();

  users = users.filter((user) => user.id !== userId);
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
  res.status(204).send();
});

module.exports = router;
