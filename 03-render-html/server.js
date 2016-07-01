
var http = require('http');
var fs = require('fs');


http.createServer(function (request, response) {
    response.writeHead(200,{'Content-Type':'text/palin'});
    fs.readFile('./index.html',null,function (error,data) {
        if(error){
            response.writeHead(404);
            response.write('Page not found');
        }else {
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data);
        }
        response.end();
    })
}).listen(8000);