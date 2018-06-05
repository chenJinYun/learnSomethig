// 引入读写文件的模块
let fs = require('fs')
// 读文件readFile('需要读的文件的路径'，'编码'，回调函数)
// 回调函数第一个会失败回调，没有则返回null
//            第二个返回拿到的字符串
// 普通
// fs.readFile('test.html', 'utf-8', function (err, data) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

// 图片，二进制
fs.readFile('./img/flower.jpg', function(err, data){
  if (err) {
    console.log(err)
  } else {
    // 二进制--->字符串
    let str = data.toString('utf-8')
    console.log(str)
    
  }
})