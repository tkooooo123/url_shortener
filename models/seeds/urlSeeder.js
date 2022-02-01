const mongoose = require('mongoose')
const Url = require('../url')
mongoose.connect('mongodb://localhost/url_shortener')
const db = mongoose.connection
db.on('error', () => {
    console.log('mongodb error!')
})
db.once('open', () => {
    console.log('mongodb connected!')
})

