const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const URL = require('./models/url')
const routes = require('./routes')
require('./config/mongoose')

const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(routes)

app.listen(3000, () => {
    console.log('App is listening on http://localhost:3000')
})