import jsonwebtoken from 'jsonwebtoken';

import { Result } from '../utils';

const USER = {
    username: 'user@email.com',
    password: 'user'
};

export default class AuthService {
    login(ctx) {
        const { username, password } = ctx.request.body;

        switch (true) {
            case username === USER.username && password === USER.password: {
                const accessToken = jsonwebtoken.sign({
                    username: USER.username,
                }, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: '10m'
                });

                const refreshToken = jsonwebtoken.sign({
                    username: USER.username,
                }, process.env.REFRESH_TOKEN_SECRET, {
                    expiresIn: '1d'
                });

                ctx.status = 200;
                ctx.cookies.set('basic-api-token', refreshToken, {
                    httpOnly: true,
                    sameSite: 'None',
                    secure: process.env.NODE_ENV === 'production',
                    maxAge: 24 * 60 * 60 * 1000
                });

                ctx.body = Result.success({ accessToken });

                break;
            }
            case username !== USER.username: {
                ctx.status = ctx.status = 404;
                ctx.body = Result.notFoundError('User nor found');

                break;
            }
            default: {
                ctx.status = ctx.status = 403;
                ctx.body = Result.forbiddenError('Wrong password');
            }
        }
    }

    refresh(ctx) {
        const refreshToken = ctx.cookies.get('basic-api-token');

        if (refreshToken) {
            jsonwebtoken.verify(
                refreshToken,
                process.env.REFRESH_TOKEN_SECRET,
                (err) => {
                    if (err) {
                        ctx.status = ctx.status = 401;
                        ctx.body = Result.authorizationError();
                    }
                    else {
                        const accessToken = jsonwebtoken.sign({
                            username: USER.username,
                        }, process.env.ACCESS_TOKEN_SECRET, {
                            expiresIn: '10m'
                        });

                        ctx.status = 200;
                        ctx.body = Result.success({ accessToken });
                    }
                }
            );
        }
        else {
            ctx.status = ctx.status = 401;
            ctx.body = Result.authorizationError();
        }
    }
}
