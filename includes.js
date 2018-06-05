let arr = [{ a: '1' }, { b: '2' }]
let arr2 = [{ a: '1' }, { b: '2' }]
arr2.map(item => {
  console.log(arr.includes(item))
})