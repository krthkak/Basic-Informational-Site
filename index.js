// app.js
import http from 'http';

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello from Node!</h1><p>This is plain HTML.</p>');
});

server.listen(port , () => {
  console.log('Server running at http://localhost:3000');
});
