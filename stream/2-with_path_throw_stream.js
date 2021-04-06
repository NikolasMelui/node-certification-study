const { PassThrough } = require('stream');

const passThrough = new PassThrough();
process.stdin.pipe(passThrough).pipe(process.stdout);
