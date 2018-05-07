var http = require('http');

http.createServer(function (request,response){

    // 发送头部文件
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200,{'Content-Type': 'text/plain'});

    // 发送响应数据 Hello Node.Js
    response.end('Hello Node.Js\n');
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');