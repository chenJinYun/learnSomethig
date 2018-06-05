let fs = require('fs')
// 使用pipe实现赋值功能
let rs = fs.createReadStream('test1.txt', 'utf-8')
let ws = fs.createWriteStream('test2.txt', 'utf-8')
ws.write('来吧，赋值 \n')
// ws.end() 如果加了end就关闭了写操作，在复制的时候就没办法写入文件
rs.pipe(ws, { end: false })

// rs.on('end', function (thunk) {
//     console.log(thunk)
// })