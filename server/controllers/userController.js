const expressAsyncHandler = require("express-async-handler");

// Simple middleware for handling exceptions inside of async express routes 
// and passing them to your express error handlers.
// 
const asyncHandler = require(expressAsyncHandler);

// @desc    Get users
// @route   GET /api/users
// @access  Private
const getUsers = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: "GET all users" })
});

// @desc    Set user
// @route   POST /api/users
// @access  Private
const setUser = asyncHandler(async (req, res) => {
    if(!req.body.username) {
        res.status(400)
        throw new Error('Please enter a username') // uses Express built-in error handler
    };

    res.status(200).json({ msg: "POST user" })
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    res.status(200).json({ msg: `Update user ${id}` })
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private
const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    res.status(200).json({ msg: `DELETE user ${id}` })
});


module.exports = {
    getUsers,
    setUser,
    updateUser,
    deleteUser
}