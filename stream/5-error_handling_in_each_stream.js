const { PassThrough } = require('stream');

const passThrough = new PassThrough();

passThrough.on('error', (err) => {
  console.error('passThrough encountered an error:', err);
});

passThrough.on('error', (err) => {
  console.error('passThrough encountered an error:', err);
});
process.stdin.on('error', (err) => {
  console.error('stdin encountered an error:', err);
});
process.stdout.on('error', (err) => {
  console.error('stdout encountered an error:', err);
});

process.stdin.pipe(passThrough).pipe(process.stdout);

passThrough.emit('error', new Error('Fu...'));
