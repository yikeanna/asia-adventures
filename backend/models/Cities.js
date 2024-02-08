const mongoose = require('mongoose');


const citySchema = new mongoose.Schema({
    name: String,
    chinese_name: String,
    header: String,
    description: String,
    image: String,
    posts: [{
        image: String,
        description: String,
        date: String,
        owner: String
    }]
});

const CityModel = mongoose.model('City', citySchema);

module.exports = CityModel;