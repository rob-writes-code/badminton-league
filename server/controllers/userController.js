// @desc    Get users
// @route   GET /api/users
// @access  Private
const getUsers = (req, res) => {
    res.status(200).json({ msg: "GET all users" })
};

// @desc    Set user
// @route   POST /api/users
// @access  Private
const setUser = (req, res) => {
    res.status(200).json({ msg: "POST user" })
};

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private
const updateUser = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ msg: `Update user ${id}` })
};

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ msg: `DELETE user ${id}` })
};


module.exports = {
    getUsers,
    setUser,
    updateUser,
    deleteUser
}