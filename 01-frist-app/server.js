requestHandle = function (request, response) {
    response.writeHead(200,{'Content-Type':'text/palin'});
    response.write('Hello word');
    response.end();
}
var http = require('http');
http.createServer(requestHandle).listen(8000);