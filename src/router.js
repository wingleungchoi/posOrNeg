const Router = require('koa-router');
const { predictPositive } = require('./predict');

const router = new Router();

router.get('/health', (ctx, next) => {
  ctx.body = 'it is up!';
});

router.post('/sentiment', async (ctx, next) => {
  const { sentence } = ctx.request.body;
  ctx.body = {
    positive: await predictPositive({
      sentence,
    }),
  };
});

module.exports = {
  router,
};
