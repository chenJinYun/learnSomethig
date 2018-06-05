let fs = require('fs')
// 创建一个读文件流
// 一直读文件
// data事件表示文件可读，每一次读一部分
// end 结束事件，文件读完触发
// 二人异常事件，读的过程出现错误的触发
let rs = fs.createReadStream('../test.html')
rs.on('data', function (chunk) {
  console.log(chunk.toString())
})
rs.on('end', function () {
  console.log('END')
})
rs.on('err', function (err) {
  console.log(err)
})