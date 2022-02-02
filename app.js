const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const URL = require('./models/url')

const app = express()

mongoose.connect('mongodb://localhost/url_shortener')
const db = mongoose.connection
db.on('error', () => {
    console.log('mongodb error!')
})
db.once('open', () => {
    console.log('mongodb connected!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/url', (req,res) => {
    URL.find()
    .lean()
    .then(urls => res.render('show', {urls}))
    .catch(error => console.log(error))
})

app.post('/urls', (req,res) => {
    const name = req.body.name
    return URL.create({name})
    .then(() => res.render('show', {name}))
    .catch(error => console.log(error))
})

app.listen(3000, () => {
    console.log('App is listening on http://localhost:3000')
})