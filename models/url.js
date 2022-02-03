const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
    url: {
        type: String,
        requierd: true
    },
    shortUrl: {
        type: String,
        required: true
    }
    
})
module.exports = mongoose.model('URL', urlSchema)