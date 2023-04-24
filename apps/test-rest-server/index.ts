import Koa from 'koa';
import body from 'koa-body';
import Router from 'koa-router';
import serve from 'koa-static';
import cors from 'koa2-cors';

import routes from './routes';

const PORT = 3300;
const app = new Koa();
const router = new Router();

routes.forEach((route) => {
    return router[route.method](route.path, route.action);
});

app.use(cors());
app.use(
    body({
        encoding: 'gzip',
        formidable: {
            keepExtensions: true,
            maxFieldsSize: 20 * 1024 * 1024,
        },
        multipart: true,
    })
);

app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve('public'));

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Application started successfully: http://localhost:${PORT}`);
});
