const { PassThrough, pipeline } = require('stream');
const fs = require('fs');
const { promisify } = require('util');

(async () => {
  try {
    const input = fs.createReadStream('file.txt');
    const passThrough = new PassThrough();
    const output = fs.createWriteStream('out.txt');

    passThrough.emit('error', new Error('Fu...'));

    console.log('Starting pipeline...');

    await promisify(pipeline)(input, passThrough, output);
  } catch (error) {
    console.error(error);
  }
})();
