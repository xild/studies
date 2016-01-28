const fs = require('fs');

const file = fs.createReadStream('origin.txt');
const destFile = fs.createWriteStream('destination.txt');

file.pipe(destFile, {end: false});

file.on('end', () => {
  destFile.end('Finished!');
});
