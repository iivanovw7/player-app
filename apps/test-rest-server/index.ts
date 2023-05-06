import 'dotenv/config';
import Koa from 'koa';
import body from 'koa-body';
import Router from 'koa-router';
import serve from 'koa-static';
import cors from 'koa2-cors';

import { authorize } from './middlewares';
import routes from './routes';

const PORT = 3400;
const app = new Koa();
const router = new Router();

routes.forEach((route) => {
    return router[route.method](route.path, ...route.middlewares, route.action);
});

app.use(authorize);
app.use(cors());
app.use(body());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve('public'));

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Application started successfully: http://localhost:${PORT}`);
});
