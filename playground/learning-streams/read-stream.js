import { createReadStream } from 'fs';

const readStream = createReadStream('./files.txt', 'utf8');

readStream.on('data', chunk => {
  console.log('Read chunk: ' + chunk);
});

readStream.on('error', error => {
  console.log(`There was error reading the file: ${error}`);
});

readStream.on('end', () => console.log('No more data...'));
