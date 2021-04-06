const fs = require("fs");

const inuptFileStream = fs.createReadStream("file.txt");
inuptFileStream.pipe(process.stdout);
