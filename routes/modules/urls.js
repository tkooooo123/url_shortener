const express = require('express')
const router = express.Router ()
const URL = require('../../models/url')

router.get('/url', (req,res) => {
    URL.find()
    .lean()
    .then(urls => res.render('show', {urls}))
    .catch(error => console.log(error))
})

router.post('/urls', (req,res) => {
    const name = req.body.name
    return URL.create({name})
    .then(() => res.render('show', {name}))
    .catch(error => console.log(error))
})

module.exports = router