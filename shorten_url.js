function shortenUrl() {
    const upperletter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerletter = upperletter.toLowerCase()
    const number = '1234567890'

    let collection =[]
    collection = collection.concat(upperletter.split(''))
    collection = collection.concat(lowerletter.split(''))
    collection = collection.concat(number.split(''))

    let shortUrl = ''
    for (let i = 0; i < 5; i++) {
        const index = Math.floor(Math.random()*collection.length)

        shortUrl += collection[index]
    }
    return shortUrl
}

module.exports = shortenUrl