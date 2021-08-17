// const dotenv = require('dotenv');
// const http = require('http');
import dotenv from 'dotenv';
import http from 'http';

dotenv.config({ path: './config.env' });

import { rename, stat } from 'fs/promises';

const from = `./tmp/hello`;
const to = `./tmp/world`;

try {
  await rename(from, to);
  const stats = await stat(to);
  console.log(`stats: ${JSON.stringify(stats)}`);
} catch (error) {
  console.error('there was an error:', error.message);
}

//open server
const server = http.createServer((req, res) => {
  //handling server requests from here
  console.log(req.url);

  res.end('Ending request...');
});

//listen to the server
server.listen(process.env.PORT, process.env.HOST, () => {
  console.log('\n');
  console.log(
    `Server running... at http://${process.env.HOST}:${process.env.PORT}`
  );
});
