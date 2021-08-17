import fs from 'fs';

const rs = fs.createReadStream('./file.txt', 'utf8');

async function run() {
  for await (const chunk of rs) {
    console.log(`Read chunk: ${chunk}`);
  }

  console.log('No more data!');
}

run();
