const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
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
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Team', TeamSchema);