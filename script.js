var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(biblioteca_js/adicionar.html);
}).listen(8080);