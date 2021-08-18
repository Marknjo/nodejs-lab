import fs from 'fs';
import http from 'http';
import path from 'path';

const form = fs.readFileSync(path.join('./public', 'form.html'), 'utf8');

http
  .createServer((req, res) => {
    if (req.method === 'GET') {
      get(res);
      return;
    }

    if (req.method === 'POST') {
      post(req, res);
      return;
    }

    error(405, res);
  })
  .listen(3000);

function get(res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(form);
}

function post(req, res) {
  if (req.headers['content-type'] !== 'application/json') {
    error(415, res);

    return;
  }

  let input = '';

  req.on('data', chunk => {
    input += chunk.toString();
  });

  req.on('end', () => {
    const parsed = JSON.parse(input);

    if (parsed.err) {
      error(400, 'Bad Request', res);
    }

    res.end('{"data": ' + input + '}');
  });
}

function error(code, res) {
  res.statusCode = code;

  res.end(http.STATUS_CODES[code]);
}
