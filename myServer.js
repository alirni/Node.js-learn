const http = require('http');

const hostName = '127.0.0.1';
const port = 8888;

const server = http.createServer((req, res) => {
  res.statusCode = 403;
  res.statusMessage = 'Not found';

  res.setHeader('Content-Type', 'text/html');
  res.write('<p style="color: blue; font-size: 20px;">this is a test for creating a server with Node.js!</p>');

  // res.setHeader('Content-Type', 'text/plain');
  // res.write('this is a test for creating a server with Node.js!');
  res.end();
});

server.listen(port, hostName, () => {
  console.log(`Server is Up on http://${hostName}:${port}/`);
});
