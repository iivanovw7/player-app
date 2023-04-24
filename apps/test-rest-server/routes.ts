import ProfilesController from './controller/ProfilesController';

export default [
    {
        action: ProfilesController.getProfiles,
        method: 'get',
        path: '/getProfiles',
    },
];
