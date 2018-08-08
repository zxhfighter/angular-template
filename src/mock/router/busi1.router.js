const Router = require('koa-router');
const router = new Router();

router.get('/busi1/list', (ctx, next) => {
    ctx.body = require('../data/busi1/list')();
});

module.exports = router;
