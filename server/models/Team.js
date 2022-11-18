const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema({
    teamName: {
        type: String,
        required: true,
        unique: true
    },
    division: {
        type: String,
        required: true
    },
    league: {
        type: String,
        required: true
    },
    rubbers: Number,
    matchesPlayed: Number,
    gamesWon: Number,
    gamesLost: Number,
    pointsFor: Number,
    pointsAgainst: Number
})

module.exports = mongoose.model('Team', TeamSchema);