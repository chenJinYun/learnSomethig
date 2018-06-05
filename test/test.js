
// async/await
// async function test() {
//     return Promise.resolve('wwwww')
// }
async function test() {
  let a = await getBaseInfo()
  let b = await getBase()
  console.log(a+b)
}  
function getBaseInfo() {
  return 1
}
async function getBase() {
  return Promise.resolve(1)
}
// async函数返回的是一个promise对象
let a = test()
// let b = getBaseInfo()
// let c = getBase()
console.log(a)