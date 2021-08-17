import server from './playground/simple-server.js';
import path from 'path';

console.log(import.meta.url);
console.log(path.join(process.cwd(), 'playground'));
