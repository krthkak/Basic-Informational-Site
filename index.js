// server.js
import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname replacement in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  let url = ''
  switch (req.url){
    case '/':url = '/index.html';
    break;
    case '':url = '/index.html';
    break;
    case '/about':url = '/about.html';
    break;
    case '/contact-me':url = '/contact-me.html';
    break;
    default:url = '404.html';
    break;
  }


  if (url) {
    try {
      const filePath = path.join(__dirname, url);
      const html = await fs.readFile(filePath, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    } catch (err) {
      res.writeHead(500);
      res.end('Error loading HTML');
    }
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
}); 

server.listen(8080, () => {
  console.log('Server running at http://localhost:3000');
});
