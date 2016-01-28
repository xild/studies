const fs = require('fs');
const file = fs.createReadStream('fruits.txt');
file.on('readable', () => {
  var chunk = null;
  while((chunk = file.read()) !== null){
    console.log(chunk.toString());
  }
});
