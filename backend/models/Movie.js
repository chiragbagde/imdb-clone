const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let movieSchema = new Schema({
    name:{
        type: String
    },
    boxoffice:{
        type: Number
    },
    imdb: {
        type: Number
    }
},{
    collection: "movies"
})

module.exports = mongoose.model('Movie', movieSchema)