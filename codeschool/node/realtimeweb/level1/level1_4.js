  var http = require('http');
  var fs = require('fs');

  http.createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    fs.readFile('/etc/passwd', (err, contents) => {
      if (err) throw err;
      console.log(contents);
      res.write(contents);
      res.end();
    });
  }).listen(8080);
