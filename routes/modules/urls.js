const express = require('express')
const url = require('../../models/url')
const router = express.Router ()
const URL = require('../../models/url')
const shortUrl = require('../../shorten_url')


router.get('/url', (req,res) => {
    URL.find()
    .lean()
    .then(urls => res.render('show', {urls}))
    .catch(error => console.log(error))
})

router.post('/urls', (req,res) => {
    const url = req.body.url
    const code = shortUrl()
    URL.findOne({url, shortUrl: code})
    .then(data => data ? data : URL.create({url, shortUrl: code}))
    .then(data => console.log(data))
    
    .then(() => res.render('show', {url, shortUrl: code}))
    .catch(error => console.log(error))
})
module.exports = router