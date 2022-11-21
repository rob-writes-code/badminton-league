const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const User = require('../models/User');

router.get('/', (req, res) => {
    res.status(200).json({ msg: "Get user page!" });
})

router.post('/', (req, res) => {
    res.status(200).json({ msg: "Posting to userrrr!" }) // instead of .send as deprecated
})

module.exports = router;