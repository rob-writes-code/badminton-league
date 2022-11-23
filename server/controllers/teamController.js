// Simple middleware for handling exceptions inside of async express routes 
// and passing them to your express error handlers.
const asyncHandler = require('express-async-handler');

const Team = require('../models/Team');

// @desc    Get teams
// @route   GET /api/teams
// @access  Private
const getTeams = asyncHandler(async (req, res) => {
    const teams = await Team.find();
    res.status(200).json(teams)
});

// @desc    Set team
// @route   POST /api/teams
// @access  Private
const setTeam = asyncHandler(async (req, res) => {
    if (!req.body.teamName) {
        res.status(400)
        throw new Error('Please enter a team name') // uses Express built-in error handler
    };

    const user = await Team.create({
        teamName: req.body.teamName
    })

    res.status(200).json(user)
});

// @desc    Update team
// @route   PUT /api/teams/:id
// @access  Private
const updateTeam = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const team = await Team.findById(id);

    if (!team) {
        res.status(400)
        throw new Error('Team not found')
    };

    const updatedTeam = await Team.findByIdAndUpdate(id, req.body, { new: true })

    res.status(200).json(updatedTeam)
});

// @desc    Delete team
// @route   DELETE /api/teams/:id
// @access  Private
const deleteTeam = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const team = await Team.findById(id);

    if (!team) {
        res.status(400)
        throw new Error('Team not found')
    };

   await Team.findByIdAndDelete(id)

    res.status(200).json({ id: id })
});


module.exports = {
    getTeams,
    setTeam,
    updateTeam,
    deleteTeam
}