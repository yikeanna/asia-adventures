const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const CityModel = require('./models/Cities');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://mongodb:27017/asia_adventures');
mongoose.connection.on('connected', () => {
    console.log('Connected to the database');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to the database:', err);
});

app.get('/getCities', async (req, res) => {
    CityModel.find()
        .then(cities => res.json(cities))
        .catch(err => res.json(err))
});

app.listen(3001, () => {
    console.log('Server has started on port 3001');
});
//cd backend
//node script.js