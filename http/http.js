// 引入http模块
let http = require('http')
// 创建一个服务， 并且设置回调函数接受请求和响应请求
let server = http.createServer(function (request, response) {
  // 可以通过request拿到请求的方法和url
  console.log(request.method)
  console.log(request.url)
  // 设置响应头
  response.writeHead(200, { 'Content-Type': 'text/html' })
  // 设置响应内容
  response.end('<p>第一个请求呢<p>')
})
// 监听端口，并且调回调
server.listen(8080, function() {
  console.log('running')
})