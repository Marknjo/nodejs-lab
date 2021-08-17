import fs from 'fs';

const rs = fs.createReadStream('/dev/urandom');

let size = 0;

rs.on('data', chunk => {
  size += chunk.length;
  console.log('File size: ' + size);
});
