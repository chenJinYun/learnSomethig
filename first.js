'use strict'
// 一般要以严格模式运行
// console.log('hellow world')
function add(a=0,b=0) {
  console.log(a+b)
}
module.exports = add
// 命令行模式执行的是js文件
// node交互模式可以直接计算结果,不能执行js文件