let fs = require('fs')
let data = '我自己写的'
// 参数   1. 需要进入的文件路径
            // 2.需要写入的数据
            // 3.会调函数，只有err，判断是否写入成功
fs.writeFile('test.txt', data, function(err) {
  if(err) {
    console.log(err)
  } else{
    console.log('ok')
  }
})