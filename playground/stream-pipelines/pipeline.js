import fs from 'fs';
import { pipeline, Transform } from 'stream';

//const rs = fs.createReadStream('./file.txt', 'utf8');

const toUpperCase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  },
});

pipeline(
  fs.createReadStream('./file.txt', 'utf8'),
  toUpperCase,
  fs.createWriteStream('./newFile.txt', 'utf8'),
  err => {
    if (err) {
      console.log('Pipeline failed: ' + err.message);
    } else {
      console.log('Pipeline succeeded.');
    }
  }
);
