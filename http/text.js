'use strict';

// a simple http server

var
    fs = require('fs'),
    url = require('url'),//獲取請求路徑對象
    path = require('path'),//路徑處理器
    http = require('http');

var root = path.resolve(process.argv[2] || '../');

console.log('Static root dir: ' + root);

var server = http.createServer(function (request, response) {
    var
        pathname = url.parse(request.url).pathname, // '/static/bootstrap.css'
        filepath = path.join(root, pathname); // '/srv/www/static/bootstrap.css'
    fs.stat(filepath, function (err, stats) {
      if (!err && stats.isFile()) {
        response.writeHead(200)
        fs.createReadStream(filepath).pipe(response)
        return
      }
      if (!err && stats.isDirectory()) {
        let indexPath = path.join(filepath, '/index1.html')
            // console.log('200 ' + request.url);
        fs.stat(indexPath, function (err, index) {
          if (!err && index.isFile()){
            response.writeHead(200);
            fs.createReadStream(indexPath).pipe(response);
          } else {
            response.writeHead(404)
            response.end('404 not found')  
          }
        })
        } else {
            console.log('404 ' + request.url);
            // response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');