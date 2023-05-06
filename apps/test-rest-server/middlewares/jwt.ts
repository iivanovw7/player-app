import koaJwt from 'koa-jwt';

export const jwt = koaJwt({
    secret: process.env.ACCESS_TOKEN_SECRET!,
});

