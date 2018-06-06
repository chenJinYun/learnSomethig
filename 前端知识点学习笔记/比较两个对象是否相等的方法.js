let obj1 = { a: 11, b: 22 }
let obj2 = { a: 11, b: 22 }
let obj3 = { a: 11, b: 33 }
let obj4 = { a: 11, b: {c:33,d:{d:88}},f:[1,2,3,{y:1}] }
let obj5 = { a: 11, b: {c:33,d:{d:88}},f:[1,2,3,{y:1}] }
// 使用JSON.stringify比较两个对象是否相等，
  // 注意点：对象的属性必须要一致，
  // 对象的属性的数据结构可以是复杂的数据类型
  // console.log(JSON.stringify(obj1) === JSON.stringify(obj2)) //true
  console.log(JSON.stringify(obj4),JSON.stringify(obj5)) 
  console.log(JSON.stringify(obj4) === JSON.stringify(obj5))