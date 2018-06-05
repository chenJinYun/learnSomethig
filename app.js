// 集中处理url的处理器,koa-router
let Koa = require('koa')
// 注意返回的是一个函数，要调用
let router = require('koa-router')()
let app = new Koa()
let bodyparses = require('koa-bodyparser')
app.use(bodyparses())
app.use(async (ctx, next) => {
  console.log(ctx)
  await next()
})
// get请求，回调函数也是异步回调函数， ctx是response和request的封装，
router.get('/', async (ctx, next) => {
  ctx.response.body = 'index'
})
// 带参数的url,可以使用params获取相应的参数
router.get('/page/:name', async (ctx, next) => {
  console.log(ctx.params)
  ctx.response.body = `hellow ${ctx.params.name}`
})


// 处理post请求，因为post请求的参数全部都是放在request的body中的，所以需要引入插件处理参数
// 使用koa-bodyparses来处理参数放在ctx.request.body中
// 必须要在route之前注册在koa上
router.post('/signin', async (ctx, next) => {
  let pa = ctx.request.body
  if (pa.name === 'admin' && pa.password === '123') {
    ctx.response.body = '<h1>welcome</h1>'
  } else {
    ctx.response.body = `<h1>Login failed!</h1>
    <p><a href="http://localhost:9527/test.html">Try again</a></p>`
  }
})
// 在app上注册router
app.use(router.routes())
app.listen('8080', function () {
  console.log('running')
})