const Koa = require('koa');
const app = new Koa();
const port = process.env.PORT || 3130;

app.use(require('./router/busi1.router').routes());
app.use(require('./router/busi2.router').routes());

app.listen(port);
