const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  res.writeHead(200);
  res.write('Hello, this is a dog');
  res.end();
});

server.listen(8080);
