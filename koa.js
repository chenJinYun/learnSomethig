let Koa = require('koa')
let app = new Koa()
app.use(async (ctx, next) => {
  await next()
  console.log(ctx.request)  
   // 设置response的Content-Type:
   ctx.response.type = 'text/html';
   // 设置response的内容:
   ctx.response.body = '<h1>Hello, koa2!</h1>';
})
app.listen('8080', function () {
  console.log('running')
})