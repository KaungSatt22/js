let mongoose = require('mongoose')
let movieSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true,
    },
    year : {
        type : Number,
        require : true,
    },
    genre : {
        type : String
    }

});

module.exports = new mongoose.model('movie',movieSchema)