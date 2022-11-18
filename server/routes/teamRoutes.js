const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const Team = require('../models/Team');

router.post('/', (req, res) => {
    res.status(200).json({msg: "Posting to teams!"}) // instead of .send as deprecated
})

module.exports = router;