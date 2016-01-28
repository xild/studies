const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});

  const file = fs.createReadStream('index.html');
  file.pipe(response);

}).listen(8080);
