import AuthController from './controller/AuthController';
import ProfilesController from './controller/ProfilesController';
import { jwt } from './middlewares';

export default [
    {
        action: AuthController.login,
        method: 'post',
        path: '/login',
        middlewares: []
    },
    {
        action: AuthController.refresh,
        method: 'post',
        path: '/refresh',
        middlewares: []
    },
    {
        action: ProfilesController.getProfiles,
        method: 'get',
        path: '/getProfiles',
        middlewares: [jwt]
    },
];
