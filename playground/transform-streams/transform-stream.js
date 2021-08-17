import fs from 'fs';
import { Transform } from 'stream';

const rs = fs.createReadStream('./file.txt', 'utf8');

const newFile = fs.createWriteStream('./newFile.txt', 'utf8');

const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    // Data processing
    callback(null, chunk.toString().toUpperCase());
  },
});

rs.pipe(uppercase).pipe(newFile);

// Read the stream
const rsNew = fs.createReadStream('./newFile.txt', 'utf8');

rsNew.pipe(process.stdout);

console.log('The end');
