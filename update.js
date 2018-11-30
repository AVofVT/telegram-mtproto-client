const fs = require('fs')
const http = require('https')
const {schema} = require('./package')

const download = function(url, dest, cb) {
    const onerror = err => (fs.unlink(dest), cb(err.message))
    const file = fs.createWriteStream(dest)
    const request = http.get(url, function(response) {

        if (response.statusCode !== 200) {
            return cb('Response status was ' + response.statusCode)
        }

        response.pipe(file)

        file.on('finish', () => file.close(cb))
    })

    request.on('error', onerror)
    file.on('error', onerror)
}


download(schema, 'schema.json', (err) => console.log(err || 'download complete!'))
