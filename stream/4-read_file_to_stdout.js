const fs = require("fs");

const inuptFileStream = fs.createReadStream("file.txt" /*{ flags: "a" }*/);
inuptFileStream.pipe(process.stdout);
