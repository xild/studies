const fs = require('fs');
const file = fs.createReadStream('fruits.txt');

file.pipe(process.stdout);
