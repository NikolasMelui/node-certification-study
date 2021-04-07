const fs = require('fs');
const path = require('path');
const { Transform, pipeline } = require('stream');
const { promisify } = require('util');

const csv = require('csvtojson');

const { transformOnePlanet } = require('./helpers');

const sourceFilePath = path.join(__dirname, '..', 'files', 'planetRaw.csv');
const targetFilePath = path.join(
  __dirname,
  '..',
  'files',
  'planetParsed.ndjson'
);

const inputStream = fs.createReadStream(sourceFilePath);
const outputStream = fs.createWriteStream(targetFilePath);

const csvParser = csv();
(async () => {
  const transformPlanetStream = new Transform({
    transform: (planet, encoding, callback) => {
      try {
        const planetObject = JSON.parse(planet);
        const transformedPlanet = transformOnePlanet(planetObject);
        const planetString = JSON.stringify(transformedPlanet, null, 2);
        callback(null, planetString);
      } catch (error) {
        callback(error);
      }
    },
  });
  try {
    await promisify(pipeline)(
      inputStream,
      csvParser,
      transformPlanetStream,
      outputStream
    );
    console.log('Pipeline has been seccessfully completed');
  } catch (error) {
    console.error(`Pipeline encountered an error: ${error}`);
  }
})();
