import fs from 'fs';
console.time('chunking');
const rs = fs.createReadStream('./file.txt', 'utf8');

let size = 0;
let chunkArr = [];

rs.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // Use a loop to make sure we read all currently available data

  while (null !== (chunk = rs.read())) {
    console.log(`Read ${chunk.length} bytes of data...`);
    chunkArr.push(chunk);
  }
});

// 'end' will be triggered once when there is no more data available
rs.on('end', () => {
  console.log('Reached end of stream.');
  const content = chunkArr.join('');
  //console.log(content);
  console.timeEnd('chunking');
});

// rs.on('data', chunk => {
//   size += chunk.length;
//   console.log('File size: ' + size);
// });
