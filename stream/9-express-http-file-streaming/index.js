const fs = require('fs');
const path = require('path');
const { Transform, pipeline } = require('stream');
const { promisify } = require('util');

const express = require('express');

const PORT = 3000;
const app = express();

const filePath = path.join(__dirname, '..', 'files', 'planetRaw.csv');

app.get('/download', (req, res) => {
  const fileStream = fs.createReadStream(filePath);

  fileStream.on('open', () => {
    res.attachment(filePath);
    fileStream.pipe(res);
  });

  fileStream.on('error', (error) => {
    console.error(error);
    res.end('Error downloading the file');
  });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
