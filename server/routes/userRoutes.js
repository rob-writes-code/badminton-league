const express = require('express');
const router = express.Router();
const { getUsers, setUser, updateUser, deleteUser } = require('../controllers/userController');

// authentication dependencies
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const User = require('../models/User');

// CRUD routes
router.get('/', getUsers);
router.post('/', setUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


module.exports = router;