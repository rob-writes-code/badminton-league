const express = require('express');
const router = express.Router();

// HTTP methods organised into a controller file
const { 
    getTeams,
    createTeam,
    updateTeam,
    deleteTeam 
} = require('../controllers/teamController');

const { protect } = require('../middleware/authMiddleware');

// CRUD routes
router.route('/').get(protect, getTeams).post(protect, createTeam);
router.route('/:id').put(protect, updateTeam).delete(protect, deleteTeam);

module.exports = router;