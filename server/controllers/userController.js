// Simple middleware for handling exceptions inside of async express routes 
// and passing them to your express error handlers.
const asyncHandler = require('express-async-handler');

const User = require('../models/User');

// @desc    Get users
// @route   GET /api/users
// @access  Private
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json(users)
});

// @desc    Set user
// @route   POST /api/users
// @access  Private
const setUser = asyncHandler(async (req, res) => {
    if (!req.body.username) {
        res.status(400)
        throw new Error('Please enter a username') // uses Express built-in error handler
    };

    const user = await User.create({
        username: req.body.username
    })

    res.status(200).json(user)
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
        res.status(400)
        throw new Error('User not found')
    };

    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true })

    res.status(200).json(updatedUser)
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private
const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
        res.status(400)
        throw new Error('User not found')
    };

   await User.findByIdAndDelete(id)

    res.status(200).json({ id: id })
});


module.exports = {
    getUsers,
    setUser,
    updateUser,
    deleteUser
}