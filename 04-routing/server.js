/**
 * Created by walid on 01/07/16.
 */

var http = require('http');
var app = require('./app');

http.createServer(app.handleRequest).listen(8001);