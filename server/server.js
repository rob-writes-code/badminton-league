const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require('./config/db');
const colors = require('colors');

const dotenv = require('dotenv').config();

const port = process.env.PORT || 5100;

// run function to connect to the database;
connectDB();

// express middleware
app.use(cors());
app.use(express.json());
// may need urlencoded too

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/teams', require('./routes/teamRoutes'));

app.get('/', (req, res) => {
  res.send('HI BABY!!! Looking GOOD...')
})

app.listen(port,
  console.log(`Running in ${process.env.NODE_ENV} mode on port ${port}`)
);