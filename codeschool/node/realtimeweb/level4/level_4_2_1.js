const http = require('http');

exports.myRequest = (message) => {
  var request = http.request('http://codeschool.com', (response) => {
    response.pipe(process.stdout, { end: false });
  });

  request.write(message);
  request.end();
};
