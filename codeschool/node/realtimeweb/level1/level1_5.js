  var http = require('http');
  var fs = require('fs');

  http.createServer((req, res) => {
    res.writeHead(200, {'Content-type':'text/html' });
    res.end('Hello, this is a dog');
  }).listen(8080);
