let fs = require('fs')
// 创建一个写的流
// 需要写入的文件的路径
let ws = fs.createWriteStream('text.txt')
// write事件，写的事件，可以使用html
ws.write('第一个以流的形式写。。。。\n')
ws.write('END')
ws.write('END')
ws.write('END')
ws.write('END')
ws.write('END')
ws.write('END')
ws.end()
// end 写完的事件

let rs = fs.createReadStream('./text.txt', 'utf-8')
rs.on('data', function (thunk) {
  console.log(thunk)
})
