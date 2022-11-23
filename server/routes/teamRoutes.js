const express = require('express');
const router = express.Router();

// HTTP methods organised into a controller file
const { 
    getTeams,
    setTeam,
    updateTeam,
    deleteTeam 
} = require('../controllers/teamController');

// CRUD routes
router.route('/').get(getTeams).post(setTeam);
router.route('/:id').put(updateTeam).delete(deleteTeam);

module.exports = router;