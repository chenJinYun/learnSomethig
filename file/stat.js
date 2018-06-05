let fs = require('fs')
// 获取文件的详细信息
// 参数： 1，err失败信息
// 2，文件信息对象
fs.stat('./test.txt', function(err, stat) {
  if (err) {
    console.log(err)
  } else {
    // console.log(stat)
    // 判断是否为文件
    if (stat.isFile()) {
      // 获取文件的大小，创建时间，修改时间
      console.log(stat.size)
      console.log(stat.mtime)
      console.log(stat.birthtimeMs)
    }
  }
})