const express = require('express')
const { redirect, append } = require('express/lib/response')
const url = require('../../models/url')
const router = express.Router ()
const URL = require('../../models/url')
const shortUrl = require('../../shorten_url')




router.post('/urls', (req,res) => {
    const url = req.body.url
    const code = shortUrl()
    
    URL.findOne({url}) 
    .then(data => data ? data : URL.create({url, shortUrl: code}))
    .then(data => res.redirect(`/url/${data._id}`))   
    .catch(error => console.log(error))
})

router.get('/url/:id', (req, res) => {
    const id = req.params.id
    URL.findById(id)
    .lean()
    .then(data => {
        const short_url = `http://localhost:3000/${data.shortUrl}`
        res.render('show', {url, short_url})
    })
    .catch(error => console.log(error))
})


module.exports = router