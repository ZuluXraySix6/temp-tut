const http = require('http');

const server = http.createServer(function (req, res) {

    if (req.url === '/') {
        res.end('Welcome to our homepage');
    }
    if (req.url === '/about') {
        res.end('This is the About Page.')
    }
    res.end('<h1>Page doesnt EXIST. </h1>')
})

server.listen(5000);