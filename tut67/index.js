const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readfileSync('index.html')
const about = fs.readfileSync('./about.html')
const services = fs.readfileSync('./services.html')
const contact = fs.readfileSync('./contact.html')

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(home);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});