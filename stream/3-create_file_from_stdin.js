const fs = require('fs');

const outputStream = fs.createWriteStream('file.txt');
process.stdin.pipe(outputStream);
