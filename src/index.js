const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const { router } = require('./router');

const PORT_NUMBER = 8080;

const app = new Koa();
app.use(bodyParser());
app
  .use(router.routes());

app.on('error', (err) => {
  console.error('server error', err);
});

app.listen(PORT_NUMBER);
console.log(`Server is listening to ${PORT_NUMBER}`);
