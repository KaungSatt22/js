var http = require('http');

http.createServer(function(request, response) {
  var proxy = http.createClient(9000, 'localhost')
  var proxyRequest = proxy.request(request.method, request.url, request.headers);
  proxyRequest.on('response', function (proxyResponse) {
    proxyResponse.pipe(response);
  });
  request.pipe(proxyRequest);
}).listen(8080);

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied to port 9000!' + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(9000);