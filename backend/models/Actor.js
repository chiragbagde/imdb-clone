const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let actorSchema = new Schema({
    name:{
        type: String
    },
    height:{
        type: Number
    },
    awards: {
        type: String
    }
},{
    collection: "actors"
})

module.exports = mongoose.model('Actor', actorSchema)