const Router = require('koa-router');
const { predictPositive } = require('./predict');

const router = new Router();

router.get('/health', (ctx, next) => {
  ctx.body = 'it is up!';
});

router.post('/sentiment', async (ctx, next) => {
  const { sentence } = ctx.request.body;
  try {
    ctx.body = {
      positive: await predictPositive({
        sentence,
      }),
    };
  } catch (error) {
    console.error(error);
    ctx.body = {
      error: error.message,
    };
  }
});

module.exports = {
  router,
};
