/**
 * Created by walid on 01/07/16.
 */
var url = require('url');
var fs = require('fs');

function renderHtml (path ,response) {
    fs.readFile(path,null,function (error,data) {
        if(error){
            response.writeHead(404);
            response.write('Page not found');
        }else {
            response.write(data);
        }
        response.end();
    })
}

module.exports = {
    handleRequest : function (request , response) {
        response.writeHead(200,{'Content-Type' : 'text/html'});
        var path = url.parse(request.url).pathname ;
        switch ( path ){
            case '/':
                renderHtml('./index.html' , response);
                break;
            case '/login' :
                renderHtml('./login.html' , response);
                break;
            default :
                response.writeHead(404);
                response.write('Rout is not defined!')
                response.end();
        }
    }
}