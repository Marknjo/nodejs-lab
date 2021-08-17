import fs from 'fs';
import { Transform } from 'stream';

const rs = fs.createReadStream('./file.txt', 'utf8');
const newFile = fs.createWriteStream('./newFile', 'utf8');

class Uppercase extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());

    callback();
  }
}

rs.pipe(new Uppercase()).pipe(newFile);
