const Router = require('koa-router');
const router = new Router();

router.get('/busi2/list', (ctx, next) => {
    ctx.body = require('../data/busi2/list')();
});

module.exports = router;
