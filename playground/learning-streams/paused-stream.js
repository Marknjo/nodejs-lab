import fs from 'fs';

const rs = fs.createReadStream('./file.txt', 'utf8');

rs.on('readable', function () {
  let data;

  while (null !== (data = rs.read())) {
    console.log('Read Chunk: ' + data);
  }
});

rs.on('end', function () {
  console.log('Finished reading data...😃');
});
