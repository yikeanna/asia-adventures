const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const CityModel = require('./models/Cities');


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/asia_adventures', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Connected to the database');
});

app.get('/getCities', async (req, res) => {
    CityModel.find()
    .then(cities => res.json(cities))
    .catch(err => res.json(err))
});


app.listen(3001, () => {
    console.log('Server has started');
});
