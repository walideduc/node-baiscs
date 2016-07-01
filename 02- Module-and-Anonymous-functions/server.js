
var http = require('http');
var module1 = require('./module1');
http.createServer(function (request, response) {
    response.writeHead(200,{'Content-Type':'text/palin'});
    response.write(module1.myString);
    module1.myFunction();
    response.end();
}).listen(8000);