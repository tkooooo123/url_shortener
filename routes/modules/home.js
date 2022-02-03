const express = require('express')
const router = express.Router ()
const URL = require('../../models/url')

router.get('/', (req, res) => {
    res.render('index')
})


router.get('/:shortUrl', (req, res) => {
    const shortUrl = req.params.shortUrl
    return URL.findOne({shortUrl})
    .then(item => res.redirect(`${item.url}`))
    .catch(error => console.log(error))
})
module.exports = router