import ProfilesService from '../service/ProfilesService';

class ProfilesController {
    private service: ProfilesService = new ProfilesService();

    getProfiles = async (ctx) => {
        ctx.body = await this.service.getProfiles();
    };
}

export default new ProfilesController();
