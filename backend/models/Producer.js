const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let producerSchema = new Schema({
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
    collection: "producers"
})

module.exports = mongoose.model('Producer', producerSchema)