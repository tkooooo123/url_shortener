const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost/url_shortener')
const db = mongoose.connection
db.on('error', () => {
    console.log('mongodb error!')
})
db.once('open', () => {
    console.log('mongodb connected!')
})

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(3000, () => {
    console.log('App is listening on http://localhost:3000')
})