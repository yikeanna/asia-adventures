const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const CityModel = require('./models/Cities');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/asia_adventures', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
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
    console.log('Server has started');
});
//cd backend
//node script.js