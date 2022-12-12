const http = require('http')
/* 
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Welcome to our short history')
    }

    res.end('WWW')

})

server.listen(5000) */

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify({
        data: [
            'Hello World!',
            'Hello World!',
            'Hello World!'
        ],
        total: '1000'
        }))

    }
    if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify({
        data: [
            'Hello World2!',
            'Hello World2!',
            'Hello World2!'
        ],
        total: '22000'
        }))
        
    }
    res.writeHead(200, { 'Content-Type': 'application/json' })
    return res.end(JSON.stringify({
    data: [
        'No data'
    ],
    total: '0'
    }))
  })
  
  server.listen(5000)