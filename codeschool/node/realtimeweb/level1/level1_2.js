var fs = require('fs');


fs.readFile('index.html', (err, contents) => {
  if (err) throw err;
  console.log(contents);
});
