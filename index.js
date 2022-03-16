const http = require('http');
const port = process.env.PORT || 8082;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Sabin!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
