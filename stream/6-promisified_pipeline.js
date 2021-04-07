const { PassThrough, pipeline } = require('stream');
const fs = require('fs');
const { promisify } = require('util');

(async () => {
  try {
    const sourceFilePath = path.join(__dirname, 'files', 'file.txt');
    const targetFilePath = path.join(__dirname, 'files', 'out.txt');

    const input = fs.createReadStream('files/file.txt');
    const output = fs.createWriteStream('files/out.txt');

    const passThrough = new PassThrough();
    passThrough.emit('error', new Error('Fu...'));

    console.log('Starting pipeline...');

    await promisify(pipeline)(input, passThrough, output);
  } catch (error) {
    console.error(error);
  }
})();
