const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const { predictPositive } = require('./predict');

// const index = async () => {
//   const sample = 'life is good';
//   const labels = await predict(sample);
//   console.log('labels', labels);
// };

// index();


const app = new Koa();
app.use(bodyParser());

app.use(async (ctx) => {
  console.log('sentence', ctx.request.body);
  const { sentence } = ctx.request.body;
  ctx.body = {
    positive: await predictPositive({
      sentence,
    }),
  };
});

app.listen(3000);
