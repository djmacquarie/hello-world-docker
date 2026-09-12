const http = require('http');

const port = 3000;
const number = Math.floor(Math.random() * 1000) + 1;

http.createServer((req, res) => {
  res.end(`Wylosowana liczba: ${number}`);
}).listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
