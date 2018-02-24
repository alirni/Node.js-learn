const
http = require('http'),

hostName = '127.0.0.1',
port = 8888,

server = http.createServer((req, res) => {
  res.statusCode = 403;
  res.statusMessage = 'Not found';

  res.setHeader('Content-Type', 'text/html');
  res.write('<p style="color: blue; font-size: 20px;">this is a test for creating a server with Node.js!</p>');

  res.end();
}),

serverListen = () => {
  server.listen(port, hostName, () => {
    console.log(`Server is Up on http://${hostName}:${port}/`);
  });
}
;

serverListen();
