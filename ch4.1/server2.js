const http = require('http');
const fs = require('fs').promises;

const server = http
  .createServer(async (req, res) => {
    try {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      const data = await fs.readFile('./template/server2.html');
      res.end(data);
    } catch (e) {
      console.error(e);
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(e.message);
    }
  })
  .listen(8081);
server.on('listening', () => {
  console.log('8081번 포트에서 서버 대기 중입니다');
});
server.on('error', error => {
  console.error(error);
});
