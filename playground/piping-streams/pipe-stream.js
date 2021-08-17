import fs from 'fs';
import process from 'process';

const rs = fs.createReadStream('./file.txt', 'utf8');

rs.pipe(process.stdout);
