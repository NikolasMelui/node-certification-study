const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'files', 'file.txt');

const inuptFileStream = fs.createReadStream(filePath /*{ flags: "a" }*/);
inuptFileStream.pipe(process.stdout);
