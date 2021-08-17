import fs from 'fs';

const file = fs.createWriteStream('./file.txt', 'utf8');

// create a write file generator
for (let i = 0; i < 10000; i++) {
  file.write(
    `Node.js is a JavaScript runtime built on Google Chrome's V8 JavaScript engine. ${i} \n`
  );
}
