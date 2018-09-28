
// Load http module
var http = require('http');


var server = http.createServer(function (request, response){
    response.writeHead(200, {"Content-Type":"text/plain"})
    response.end("Welcome to NodeJS!\n");
});

// listen on 3000
server.listen(3000)