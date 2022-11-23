const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema({
    teamName: {
        type: String,
        required: true,
        unique: true
    },
    division: {
        type: String,
    },
    league: {
        type: String,
    },
    rubbers: Number,
    matchesPlayed: Number,
    gamesWon: Number,
    gamesLost: Number,
    pointsFor: Number,
    pointsAgainst: Number
})

module.exports = mongoose.model('Team', TeamSchema);