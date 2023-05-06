import { Result } from '../utils';

export const authorize = (ctx, next) => {
    return next().catch((err) => {
        if (err.status === 401) {
            ctx.status = 401;
            ctx.body = Result.authorizationError();
        }
        else {
            throw err;
        }
    });
};
