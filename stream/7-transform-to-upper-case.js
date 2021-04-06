const { Transform, pipeline } = require('stream');
const { promisify } = require('util');

(async () => {
  try {
    const upperCaseTransform = new Transform({
      transform: (chunk, encoding, callback) => {
        callback(null, chunk.toString().toUpperCase());
      },
    });

    console.log('Starting pipeline...');
    await promisify(pipeline)(
      process.stdin,
      upperCaseTransform,
      process.stdout
    );
    console.log('Ending pipeline...');
  } catch (error) {
    console.error(error);
  }
})();
