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
    .then(data => {
        console.log(data)
        const short_url = `http://localhost:3000/${data.shortUrl}`
        console.log(short_url)
        res.render('show', {url, short_url})
    })   
    .catch(error => console.log(error))
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    
})


module.exports = router