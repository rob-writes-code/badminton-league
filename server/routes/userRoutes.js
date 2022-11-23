const express = require('express');
const router = express.Router();

// HTTP methods organised into a controller file
const { 
    getUsers,
    setUser,
    updateUser,
    deleteUser 
} = require('../controllers/userController');

// authentication dependencies
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const User = require('../models/User');
const { set } = require('mongoose');

// CRUD routes
router.route('/').get(getUsers).post(setUser);
router.route('/:id').put(updateUser).delete(deleteUser);

module.exports = router;