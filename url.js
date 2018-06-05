// 实现根据不同的请求返回不同的数据
let Koa = require('koa')
let app = new Koa()
// 会一层一层的寻找，如果有找到就会执行响应的use,如果没有找到则会继续找下面的use
app.use(async (ctx, next) => {
  if (ctx.request.url === '/') {
      ctx.response.body="这是首页"
  } else {
    await next()
    }
})
app.use(async (ctx, next) => {
  if (ctx.request.url === '/page') {
    ctx.response.body=`page`
  } else {
    await next()
  }
})
app.use(async (ctx, next) => {
  console.log(ctx.request)
  ctx.response.type="text/html"
  ctx.response.body='失败了！'
})
app.listen('8080', function () {
  console.log('running')
})