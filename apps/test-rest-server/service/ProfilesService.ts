import type { TProfile, TBasicApiList } from '../../../types/api/basic-api';
import profiles from '../public/profiles.json';
import { Result } from '../utils';

export default class ProfilesService {
    async getProfiles() {
        return Result.success<TBasicApiList<TProfile>>({
            count: profiles.length,
            data: profiles,
        });
    }
}
